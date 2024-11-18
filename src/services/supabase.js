import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tbiiueokztydzwygsite.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiaWl1ZW9renR5ZHp3eWdzaXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4MzYyMjEsImV4cCI6MjA0NzQxMjIyMX0.j8bRFKYXCK905m4NZaarzU3rMyhODEoLUdxPYYSu7JI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
