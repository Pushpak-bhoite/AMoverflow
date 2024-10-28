import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    tagTypes:["User"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3400" }),
    endpoints: (builder) => ({
        
        signInUser: builder.mutation({
            query: (payload) => ({
                url: "/auth/sign-in",
                method: "POST",
                body: payload,
            }),
            async onQueryStarted(payload, { dispatch, getState, extra }) {
                console.log('payload', payload);
            },
        }),
        signUpUser: builder.mutation({
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