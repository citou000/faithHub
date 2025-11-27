import {createClient} from '@supabase/supabase-js'
import type { Database } from '@/lib/supabase'

const viteSupabaseUrl = import.meta.env.VITE_SUPABASE_URL
const viteSupabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient<Database>(
  viteSupabaseUrl,
  viteSupabaseKey
);
