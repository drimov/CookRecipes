export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          bio: string | null
          email: string
          id: string
          recipes: string[] | null
          username: string
        }
        Insert: {
          bio?: string | null
          email: string
          id: string
          recipes?: string[] | null
          username: string
        }
        Update: {
          bio?: string | null
          email?: string
          id?: string
          recipes?: string[] | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
