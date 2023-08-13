import { createClient } from '@supabase/supabase-js'

import { supabaseAnonKey, supabaseEndpoint } from '../constants'

export const supabaseClient = createClient(supabaseEndpoint, supabaseAnonKey)
