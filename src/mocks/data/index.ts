import { AuthUser, Session, User } from "@supabase/supabase-js"

import { Profile } from "@/types/database"

export const testUser: User = {
  id: "11111a4-e2cc-1111-2222-111111111ew11",
  aud: "authenticated",
  role: "authenticated",
  email: "test@gmail.com",
  email_confirmed_at: "2023-09-22T18:21:20.330287Z",
  phone: "",
  confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
  confirmed_at: "2023-09-22T18:21:20.330287Z",
  last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
  app_metadata: {
    provider: "email",
    providers: ["email"],
  },
  user_metadata: {},
  identities: [
    {
      id: "11111a4-e2cc-1111-2222-111111111ew11",
      user_id: "11111a4-e2cc-1111-2222-111111111ew11",
      identity_data: {
        email: "test@gmail.com",
        sub: "11111a4-e2cc-1111-2222-111111111ew11",
      },
      provider: "email",
      last_sign_in_at: "2023-09-22T18:20:51.851035Z",
      created_at: "2023-09-22T18:20:51.851076Z",
      updated_at: "2023-09-22T18:20:51.851076Z",
    },
  ],
  created_at: "2023-09-22T18:20:51.847305Z",
  updated_at: "2023-09-26T13:58:07.574434Z",
}
export const testUserEmailTaken: User = {
  id: "11111a4-e2cc-1111-2222-111111111ew11",
  aud: "authenticated",
  role: "authenticated",
  email: "test@gmail.com",
  email_confirmed_at: "2023-09-22T18:21:20.330287Z",
  phone: "",
  confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
  confirmed_at: "2023-09-22T18:21:20.330287Z",
  last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
  app_metadata: {
    provider: "email",
    providers: ["email"],
  },
  user_metadata: {},
  identities: [],
  created_at: "2023-09-22T18:20:51.847305Z",
  updated_at: "2023-09-26T13:58:07.574434Z",
}
export const testUserAuth: AuthUser = {
  id: "123",
  app_metadata: {},
  user_metadata: {},
  aud: "12345",
  email: "test@gmail.com",
  created_at: "2022-05-17T10:30:00Z",
}

export const testUserProfile: Profile = {
  avatar_url: null,
  bio: "Nothing yet",
  id: "123",
  username: "testuser",
  favourites: [],
  recipes: [],
  updated_at: "2022-05-17T10:30:00Z",
}

export const testUserSession: Session = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsImtwefwefwefwefc sjchskucbwekucvbuewycvjewcvjygvkxbqiwdcfg",
  token_type: "bearer",
  expires_in: 3600,
  expires_at: 1695740287,
  refresh_token: "SKmJZxc7q6bEsEVjLjubmQ",
  user: {
    id: "11111a4-e2cc-1111-2222-111111111ew11",
    aud: "authenticated",
    role: "authenticated",
    email: "test@gmail.com",
    email_confirmed_at: "2023-09-22T18:21:20.330287Z",
    phone: "",
    confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
    confirmed_at: "2023-09-22T18:21:20.330287Z",
    last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
    app_metadata: {
      provider: "email",
      providers: ["email"],
    },
    user_metadata: {},
    identities: [
      {
        id: "11111a4-e2cc-1111-2222-111111111ew11",
        user_id: "11111a4-e2cc-1111-2222-111111111ew11",
        identity_data: {
          email: "test@gmail.com",
          sub: "11111a4-e2cc-1111-2222-111111111ew11",
        },
        provider: "email",
        last_sign_in_at: "2023-09-22T18:20:51.851035Z",
        created_at: "2023-09-22T18:20:51.851076Z",
        updated_at: "2023-09-22T18:20:51.851076Z",
      },
    ],
    created_at: "2023-09-22T18:20:51.847305Z",
    updated_at: "2023-09-26T13:58:07.574434Z",
  },
}
export const testUserEmailTakenSession: Session = {
  access_token:
    "eyJhbGciOiJIUzI1NiIsImtwefwefwefwefc sjchskucbwekucvbuewycvjewcvjygvkxbqiwdcfg",
  token_type: "bearer",
  expires_in: 3600,
  expires_at: 1695740287,
  refresh_token: "SKmJZxc7q6bEsEVjLjubmQ",
  user: {
    id: "11111a4-e2cc-1111-2222-111111111ew11",
    aud: "authenticated",
    role: "authenticated",
    email: "test@gmail.com",
    email_confirmed_at: "2023-09-22T18:21:20.330287Z",
    phone: "",
    confirmation_sent_at: "2023-09-22T18:20:51.853919Z",
    confirmed_at: "2023-09-22T18:21:20.330287Z",
    last_sign_in_at: "2023-09-26T13:58:07.571113895Z",
    app_metadata: {
      provider: "email",
      providers: ["email"],
    },
    user_metadata: {},
    identities: [],
    created_at: "2023-09-22T18:20:51.847305Z",
    updated_at: "2023-09-26T13:58:07.574434Z",
  },
}

export const testUserCreate = {
  user: testUser,
  session: testUserSession,
}
export const testUserEmailTakenCreate = {
  user: testUserEmailTaken,
  session: testUserSession,
}

export const testFakeUrlImage = "url_test.png"
