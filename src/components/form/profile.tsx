import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useUpdateProfile, useUploadAvatar } from "@/commons/api/hooks/profile"

import { Button } from "@/components/ui/button/index"
import { ERROR } from "@/commons/constants"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { Profile } from "@/types/database"
import { Textarea } from "@/components/ui/textarea"
import { toastMessage } from "../toast-message"
import { useAuthContext } from "@/hooks/useAuthContext"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useUpdateUser } from "@/commons/api/hooks/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: ERROR.INVALID_MIN_CHARACTERS_USERNAME,
    })
    .max(30, {
      message: ERROR.INVALID_MAX_CHARACTERS_USERNAME,
    }),
  email: z.string().email(),
  password: z.string().min(6, { message: ERROR.INVALID_PASSWORD }),
  bio: z.string().max(160).min(4),
  avatar_url: z.string(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { profile, user, setProfile } = useAuthContext()
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
  const mutationAvatar = useUploadAvatar()

  const defaultValues: ProfileFormValues = {
    username: profile?.username ?? "",
    email: user?.email ?? "",
    password: "******",
    bio: profile?.bio ?? "",
    avatar_url: profile?.avatar_url ?? "",
  }

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  async function onChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files || event.target.files.length === 0) {
      return toastMessage({
        title: "Uploading avatar",
        message: "You must select an image to upload.",
        variant: "error",
      })
    }

    const file = event.target.files[0]
    const fileExt = file.name.split(".").pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const data = await mutationAvatar.mutateAsync({ filePath, file })
    return data.path
  }

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
      avatar_url: data.avatar_url,
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
    setProfile(updateProfile)
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
          name="avatar_url"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, ...field } }) => (
            <FormItem>
              <FormLabel>Avatar</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  placeholder="Avatar"
                  {...field}
                  onChange={async (
                    event: React.ChangeEvent<HTMLInputElement>
                  ) => {
                    const changeValue = await onChangeAvatar(event)
                    field.onChange(changeValue)
                  }}
                  disabled={mutationAvatar.isLoading}
                  className="text-muted-foreground dark:file:text-secondary-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  autoComplete="username"
                />
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
