import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://dqqcgqzertchtrleezrj.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxcWNncXplcnRjaHRybGVlenJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDY4OTksImV4cCI6MjA3OTgyMjg5OX0.JtdmKkEbjokPlId8SHDUJ5ULOpwfBsm1pNl_icGSYnM"

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);