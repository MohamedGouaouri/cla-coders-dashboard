import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

export const gqlApi = createApi({
  reducerPath: 'api',
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost:3000/graphql/',
    prepareHeaders: (headers, {getState}) => {
        // retrieve token from redux store
        const token = getState().auth?.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        } 
        return headers
    }
  }),
  endpoints: (builder) => ({
    getCategoriesGql: builder.query({
        query: () => ({
            document: gql`
                query {
                    categories
                }
            `
        })
    }),
    getChallengesGql: builder.query({
        query: ({category}) => ({
            document: gql`
                query {
                    challenges(category: "${category}") {
                        _id
                        status
                        title
                        category
                        level
                        solution_rate
                    }
                }
            `
        }),
        
    }),
    getChallengeByIdGql: builder.query({
        query: ({id}) => ({
            document: gql`
                query {
                    challenge(id: "${id}") {
                        status
                        title
                        description
                        category
                        level
                        solution_rate
                        submission {
                          code {
                            text
                            language
                          }
                        }
                        code {
                          function_name
                          code_text {
                            text
                            language
                          }
                          inputs {
                            name
                            type
                          }
                        }
                        tests {
                          weight
                          inputs {
                            name
                            value
                          }
                          output
                        }
                      }
                    }
            `
        })
    })
  })
});

export const {useGetCategoriesGqlQuery, useGetChallengesGqlQuery, useGetChallengeByIdGqlQuery} = gqlApi