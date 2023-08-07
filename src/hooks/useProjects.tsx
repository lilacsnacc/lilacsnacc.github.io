import { useState, useEffect } from 'react'
import { PostgrestError, createClient } from '@supabase/supabase-js'

import { supabaseAnonKey, supabaseEndpoint } from '../constants'
import { Database, ProjectMetadata } from '../models/database.types'

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(supabaseEndpoint, supabaseAnonKey)

//supaCall calls the Supabase API
export const useProjects = () => {
  const [data, setData] = useState<ProjectMetadata[]>()
  const [error, setError] = useState<PostgrestError | unknown>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const { data, error } = await supabase.from('project_metadata').select()

        data && setData(data)
        error && setError(error)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return { loading, data, error }
}
