const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { supabase } = require('./lib/supabase');

const app = express();
app.use(express.json());
app.use(fileUpload());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const MOCK_USER_EMAIL = 'lokeshsinghmewari@gmail.com';

// Fetch freelancer data
app.get('/api/freelancer', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('freelancers')
            .select('*')
            .eq('email', MOCK_USER_EMAIL)
            .single();

        if (error) throw error;

        res.json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update freelancer bio, email, and profile image
app.post('/api/freelancer/update', async (req, res) => {
    try {
        const { bio, email, profile_image } = req.body;

        const { error } = await supabase
            .from('freelancers')
            .update({ bio, email, profile_image })
            .eq('email', MOCK_USER_EMAIL);

        if (error) throw error;

        res.json({ message: 'Updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Add a skill
app.post('/api/freelancer/add-skill', async (req, res) => {
    try {
        const { skill } = req.body;

        const { data: freelancer, error: fetchError } = await supabase
            .from('freelancers')
            .select('skills')
            .eq('email', MOCK_USER_EMAIL)
            .single();

        if (fetchError) throw fetchError;

        const updatedSkills = [...freelancer.skills, skill];

        const { error } = await supabase
            .from('freelancers')
            .update({ skills: updatedSkills })
            .eq('email', MOCK_USER_EMAIL);

        if (error) throw error;

        res.json({ message: 'Skill added successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Add new portfolio item with image upload
app.post('/api/freelancer/add-portfolio', async (req, res) => {
    try {
        if (!req.files || !req.files.portfolioImage) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const file = req.files.portfolioImage;
        const filePath = `portfolio/${file.name}`;

        const { data, error: uploadError } = await supabase
            .storage
            .from('freelancer-portfolio-images')
            .upload(filePath, file.data, { upsert: true });

        if (uploadError) return res.status(400).json({ error: uploadError.message });

        const { publicURL, error: urlError } = supabase
            .storage
            .from('freelancer-portfolio-images')
            .getPublicUrl(filePath);

        if (urlError) return res.status(400).json({ error: urlError.message });

        const { data: freelancer, error: fetchError } = await supabase
            .from('freelancers')
            .select('portfolio')
            .eq('email', MOCK_USER_EMAIL)
            .single();

        if (fetchError) throw fetchError;

        const updatedPortfolio = [...freelancer.portfolio, publicURL];

        const { error: dbError } = await supabase
            .from('freelancers')
            .update({ portfolio: updatedPortfolio })
            .eq('email', MOCK_USER_EMAIL);

        if (dbError) throw dbError;

        res.json({ message: 'Portfolio updated successfully', publicUrl: publicURL });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Fetch FAQs with optional search term
app.get('/api/faqs', async (req, res) => {
    const { search } = req.query;

    try {
        let query = supabase.from('faqs').select('*'); // Query to select all FAQs

        if (search) {
            // If search term is present, filter FAQs based on question or answer
            query = query.ilike('question', `%${search}%`).or(
                `answer.ilike.%${search}%`
            );
        }

        // Fetch FAQs from Supabase
        const { data, error } = await query;

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.status(200).json({ faqs: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
