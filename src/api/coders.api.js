import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from './configs'

export const codersApi = createApi({
    reducerPath: 'api/coders',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: (token) => ({
                url: '/api/auth/coders/profile',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })
        }),
        updateProfile: builder.mutation({
            query: ({token, data}) => {
                return {
                    url: '/api/auth/coders/profile',
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    formData: true,
                    body: data,
                }
            }
        }),
    })
})


export const { 
    useGetProfileQuery,
    useUpdateProfileMutation,
} = codersApi