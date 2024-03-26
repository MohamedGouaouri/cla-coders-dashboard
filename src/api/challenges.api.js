import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './configs'

export const challengesApi = createApi({
    reducerPath: 'api/challenges',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    tagTypes: ['Challenges'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: (token) => ({
                url: '/api/challenges/categories',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }),
            
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
            
            query: ({token, selectedCategory}) => {
                return {
                    url: `/api/challenges?category=${selectedCategory || ''}`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },

                }
            },
            providesTags: ['Challenges']
        }),
            
        // }),
        getChallengeById: builder.query({
            query: ({token, id}) => {
                return {
                    url: `/api/challenges/${id}`,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },

                }
            }
        })
    })
})


export const { 
    useGetCategoriesQuery, 
    useGetChallengesQuery,
    useGetChallengeByIdQuery,
    useGetTrendingCategoriesQuery
} = challengesApi