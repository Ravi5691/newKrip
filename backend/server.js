require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

let accessToken = process.env.ACCESS_TOKEN;
const refreshToken = process.env.REFRESH_TOKEN;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const USER_URL = process.env.ZOHO_USERS_URL;
const ZOHO_OAUTH_URL = process.env.ZOHO_OAUTH_URL;
const ZOHO_TASK_URL = process.env.ZOHO_TASK_URL;

const refreshAccessToken = async () => {
  try {
    const response = await axios.post(ZOHO_OAUTH_URL, null, {
      params: {
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
      },
    });
    accessToken = response.data.access_token;
    console.log("Access token refreshed!");
  } catch (error) {
    console.error("Error refreshing token:", error.response.data);
  }
};

app.get("/api/profile", async (req, res) => {
  try {
    const response = await axios.get(USER_URL, {
      headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
    });

    const users = response.data.data || [];
    if (users.length === 0) return res.json({ error: "No data found" });

    const user = users[0]; // Fetch first user

    res.json({
      id: user.id,
      name: user.Full_Name || "Name",
      email: user.Email || "N/A",
      bio: user.Bio || "No bio available",
      rating: "★".repeat(user.Rating || 0),
      skills: user.Skills ? user.Skills.split(",") : [],
      portfolio: user.Portfolio || ["/Portfolio.png", "/Portfolio.png", "/Portfolio.png"],
      profileImage: user.Image_Url || "/Profile.png",
    });
  } catch (error) {
    console.error("Error fetching profile:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});

app.post("/api/update-profile", async (req, res) => {
  const { id, email, bio, profileImage } = req.body;

  try {
    await axios.put(USER_URL, { 
      data: [{ 
        id, 
        Email: email, 
        Bio: bio, 
        Image_Url: profileImage || null
      }] 
    }, {
      headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
    });

    res.json({ message: "Profile updated successfully!" });
  } catch (error) {
    console.error("Error updating profile:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to update profile" });
  }
});

app.post("/api/add-skill", async (req, res) => {
  const { id, skill } = req.body;

  try {
    const response = await axios.get(USER_URL, {
      headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
    });

    const user = response.data.data.find(user => user.id === id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const existingSkills = user.Skills ? user.Skills.split(",") : [];
    
    if (!existingSkills.includes(skill)) {
      existingSkills.push(skill);
    }

    await axios.put(USER_URL, { 
      data: [{ id, Skills: existingSkills.join(",") }] 
    }, {
      headers: { Authorization: `Zoho-oauthtoken ${accessToken}` },
    });

    res.json({ message: "Skill added successfully!" });
  } catch (error) {
    console.error("Error adding skill:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to add skill" });
  }
});

app.get("/api/tasks", async (req, res) => {
    try {
      const zohoResponse = await axios.get(ZOHO_TASK_URL, {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
      });
  
      const tasks = {
        todo: [],
        inProgress: [],
        completed: [],
      };
  
      zohoResponse.data.data.forEach((task) => {
        const taskData = {
          id: task.id,
          name: task.Subject,
          deadline: task.Due_Date || "No Deadline",
          status: task.Status,
          projectName: task.Project_Name || "Unknown Project",
          attachments: task.Attachments || [],
        };
  
        if (task.Status === "Completed") {
          tasks.completed.push(taskData);
        } else if (task.Status === "In Progress") {
          tasks.inProgress.push(taskData);
        } else if (["Not Started", "Deferred"].includes(task.Status)) {
          tasks.todo.push(taskData);
        }
      });
  
      res.json(tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
      res.status(500).json({ error: "Failed to fetch tasks" });
    }
  });

app.post("/api/add-task", async (req, res) => {
  const { subject, dueDate, status, projectName } = req.body;

  try {
    const response = await axios.post(ZOHO_TASK_URL, {
      data: [{
        Subject: subject,
        Due_Date: dueDate,
        Status: status,
        Project_Name: projectName,
      }],
    }, {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    res.json({ message: "Task added successfully!", data: response.data });
  } catch (error) {
    console.error("Error adding task:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to add task" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
