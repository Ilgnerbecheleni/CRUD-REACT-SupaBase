import { createClient } from "@supabase/supabase-js";

// To be more secure: .env file.
const supabaseURL = "https://rsrsbxkencjpbzkuorlr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcnNieGtlbmNqcGJ6a3VvcmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM2OTA5NDEsImV4cCI6MTk3OTI2Njk0MX0.e4WqTbqPs5T30_zrkpEoKClCAX5A8kp9ZVWwuqeSuiw";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
