const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://fdfsltctoeszldiitltg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkZnNsdGN0b2VzemxkaWl0bHRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0MjcwNjUsImV4cCI6MjA1NzAwMzA2NX0.FyHGY4B8pV1sQRB_KJfkufhfu7ClPWMbgLQ6d2rLEN4';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = { supabase };
