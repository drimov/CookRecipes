import { createContext, useEffect, useState } from "react"

import { Profile } from "@/types/database"
import { User } from "@supabase/supabase-js"
import { supabase } from "@/lib/supabase/client"
import { useGetProfile } from "@/commons/api/hooks/profile"
import { useGetSessionUser } from "@/commons/api/hooks/auth"

type AuthContextType = {
  user: User | null
  isLoading: boolean
  profile: Profile | null
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  profile: null,
  setProfile: () => null,
})

type AuthContextProvider = {
  children: React.ReactNode
}
const AuthContextProvider = ({ children }: AuthContextProvider) => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const { mutateAsync: mutateProfile } = useGetProfile({
    onSuccess: (data) => {
      setProfile(data)
      setLoading(false)
    },
  })
  const { mutateAsync } = useGetSessionUser({
    onSuccess: (session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        void mutateProfile(session?.user.id)
      } else {
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    void mutateAsync()
    supabase.auth.onAuthStateChange((_event, session) => {
      switch (_event) {
        case "SIGNED_OUT":
          setUser(null)
          break
      }
      setUser(session?.user ?? null)
    })
  }, [mutateAsync])
  return (
    <AuthContext.Provider
      value={{ user, isLoading: loading, profile, setProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContext, AuthContextProvider }
