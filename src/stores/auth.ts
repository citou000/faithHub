import {defineStore} from 'pinia'
import { supabase } from '@/lib/supabaseClient.ts'
import type {User} from '@supabase/supabase-js'
import { ref } from 'vue'


export const useAuth = defineStore('auth',  () => {
  const user = ref<User | null>(null)
  const userData = async () => {
    const {data , error} = await supabase.auth.getUser();
    user.value = error ? null : data.user
    return user.value;
  }

  return {
    user,
    userData,
  }
})