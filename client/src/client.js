import { createClient } from "@supabase/supabase-js";
const URL = "https://wbbuuipomamoxwpmbzfg.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiYnV1aXBvbWFtb3h3cG1iemZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTY5NTMsImV4cCI6MTk5NjIzMjk1M30.vwtkuQKOA9a8Tu_lYBXVBgu02iCm8GVgqW2UmbwaYhc";
export const supabase = createClient(URL, API_KEY);
