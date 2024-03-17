import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const codersApi = createApi({
    reducerPath: 'coders',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3000/users',
    }),
    endpoints: (builder) => ({
        getCoders: builder.query({
            query: () => '/'
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data,
            })
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data,
            })
        })
    })
})


export const { useGetCodersQuery, useLoginMutation, useSignupMutation } = codersApi