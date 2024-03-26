import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './configs'

export const codersApi = createApi({
    reducerPath: 'coders',
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
        getCategories: builder.query({
            query: () => '/categories'
        }),
        getChallenges: builder.query({
            query: () => '/challenges'
        }),
        getChallengeById: builder.query({
            query: (id) => `/challenges?id=${id || 0}`
        })
    })
})


export const { 
    useGetCategoriesQuery, 
    useGetChallengesQuery,
    useGetChallengeByIdQuery,
    useLoginMutation, 
    useSignupMutation 
} = codersApi