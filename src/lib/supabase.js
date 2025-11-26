import {createClient} from '@supabase/supabase-js'

const vitesupabaseurl = process.env.VITE_SUPABASE_URL;
const vitesupabasekey = process.env.VITE_SUPABASE_KEY;

export const supabase = createClient(vitesupabaseurl, vitesupabasekey);
