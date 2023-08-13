import { useState, useEffect } from 'react'
import { PostgrestError } from '@supabase/supabase-js'

import { supabaseClient } from '.'
import { ProjectMetadata } from '../models/database.types'

//supaCall calls the Supabase API
export const useProjects = () => {
  const [data, setData] = useState<ProjectMetadata[]>()
  const [error, setError] = useState<PostgrestError | unknown>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const { data, error } = await supabaseClient.from('project_metadata').select()

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
