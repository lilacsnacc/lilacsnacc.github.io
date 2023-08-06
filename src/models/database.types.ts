export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type ProjectMetadata = {
  bg_color: string
  id: number
  image_url: string | null
  markdown_url: string | null
  name: string | null
}

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: ProjectMetadata
        Insert: ProjectMetadata
        Update: ProjectMetadata
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
