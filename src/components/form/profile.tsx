import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button/index"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { Profile } from "@/types/database"
import { Textarea } from "@/components/ui/textarea"
import { toastMessage } from "../toast-message"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useUpdateProfile } from "@/commons/api/hooks/profile"
import { useUpdateUser } from "@/commons/api/hooks/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 6 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  password: z
    .string()
    .min(6, { message: "Password need to be at least have 6 characters" }),
  bio: z.string().max(160).min(4),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { profile, user } = useAuthContext()
  const mutationProfile = useUpdateProfile({
    onError: () => {
      setIsLoading(false)
    },
  })
  const mutationUser = useUpdateUser({
    onError: () => {
      setIsLoading(false)
    },
  })

  const defaultValues: ProfileFormValues = {
    username: profile?.username ?? "",
    email: user?.email ?? "",
    password: "******",
    bio: profile?.bio ?? "",
  }

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  async function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)

    // Check if nothing to update
    if (JSON.stringify(data) === JSON.stringify(defaultValues)) {
      setIsLoading(false)
      return toastMessage({
        title: "Nothing to update",
        message: "",
        variant: "error",
      })
    }

    const updateProfile: Profile = {
      ...profile!,
      username: data.username,
      bio: data.bio,
    }
    const isUserEmailUpdate = data.email !== user?.email
    const isUserPasswordUpdate = data.password !== defaultValues.password

    // Update profile
    await mutationProfile.mutateAsync(updateProfile)

    // Update user
    if (isUserEmailUpdate || isUserPasswordUpdate) {
      await mutationUser.mutateAsync({
        email: data.email,
        password:
          data.password !== defaultValues.password ? data.password : undefined,
      })
    }
    setIsLoading(false)

    toastMessage({
      title: "New setting up!",
      message: "Profile is update",
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a
                pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormDescription>
                If you change your email, you need to go to the older one and
                confirm the change. After you need to follow the link in the new
                one.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="******"
                  {...field}
                  type="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <FormDescription>
                You need to re-logging after change your password
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can add a little bit of fantasy. Don&apos;t worry about
                being too shine.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Update profile{" "}
          {isLoading ? (
            <Loader2 className="ml-4 animate-spin" size={"24px"} />
          ) : null}
        </Button>
      </form>
    </Form>
  )
}
