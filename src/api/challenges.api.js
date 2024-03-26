import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './configs'

export const challengesApi = createApi({
    reducerPath: 'api/challenges',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: (token) => ({
                url: '/api/challenges/categories',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        getTrendingCategories: builder.query({
            query: (token) => ({
                url: '/api/challenges/categories/trending',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        getChallenges: builder.query({
            query: (token) => ({
                url: '/api/challenges',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        getChallengeById: builder.query({
            query: (id) => `/api/challenges?id=${id || 0}`
        })
    })
})


export const { 
    useGetCategoriesQuery, 
    useGetChallengesQuery,
    useGetChallengeByIdQuery,
    useGetTrendingCategoriesQuery
} = challengesApi