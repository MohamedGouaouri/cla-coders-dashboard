import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const codersApi = createApi({
    reducerPath: 'coders',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3000',
    }),
    endpoints: (builder) => ({
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