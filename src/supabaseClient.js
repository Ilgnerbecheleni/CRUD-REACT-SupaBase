import { createClient } from "@supabase/supabase-js";

// To be more secure: .env file.
const supabaseURL = "";
const supabaseAnonKey =""

export const supabase = createClient(supabaseURL, supabaseAnonKey);
