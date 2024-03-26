import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './configs'

export const authApi = createApi({
    reducerPath: 'api/auth',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/api/auth/coders/login',
                method: 'POST',
                body: data,
            })
        }),
        signup: builder.mutation({
            query: (data) => ({
                url: '/api/auth/coders/register',
                method: 'POST',
                body: data,
            })
        }),
    })
})


export const { 
    useLoginMutation, 
    useSignupMutation 
} = authApi