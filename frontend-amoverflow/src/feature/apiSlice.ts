import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a type for the payload data
interface SignInPayload {
  email: string;
  password: string;
}

interface SignUpPayload {
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string
}

// Define a type for the response data
interface UserResponse {
  id: string;
  name: string;
  email: string;
  token: string;
}

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3400" }),
  endpoints: (builder) => ({
    signInUser: builder.mutation<UserResponse, SignInPayload>({
      query: (payload) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(payload, { dispatch, getState, extra }) {
        console.log('payload', payload);
      },
    }),
    signUpUser: builder.mutation<UserResponse, SignUpPayload>({
      query: (payload) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: payload,
      }),
      async onQueryStarted(payload, { dispatch, getState, extra }) {
        console.log('payload', payload);
      },
    }),
  }),
});

export const { useSignInUserMutation, useSignUpUserMutation } = apiSlice;
