import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './configs'

export const gradingApi = createApi({
    reducerPath: 'api/grading',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        getTopK: builder.query({
            query: (token, k) => ({
                url: `/api/grading/leaderboard/topk?k=${k || 3}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        
        
    })
})


export const { 
    useGetTopKQuery
} = gradingApi