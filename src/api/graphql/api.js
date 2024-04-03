import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

export const gqlApi = createApi({
  reducerPath: 'api',
  baseQuery: graphqlRequestBaseQuery({
    url: 'http://localhost:3000/graphql/',
  }),
  endpoints: (builder) => ({
    getCategoriesGql: builder.query({
        query: ({token}) => ({
            document: gql`
                query {
                    categories
                }
            `
        })
    }),
    getChallengesGql: builder.query({
        query: ({token}) => ({
            document: gql`
                query {
                    challenges(token: "${token}") {
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
        query: ({token, id}) => ({
            document: gql`
                query {
                    challenge(token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmU5MDMzM2UzMDkwNzlhMTk1N2NkYyIsInJvbGUiOiJjb2RlciIsImlhdCI6MTcxMjE1Mzc3OCwiZXhwIjoxNzEyMTg5Nzc4fQ.abE2H1GNdpn_Z6UgTnNjNYIpgIhV9Rscf97KQOa2pU4", id: "65feaac34c7c0fa50a47fb3e") {
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