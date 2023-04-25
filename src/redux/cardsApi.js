import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6443d90090738aa7c078f791.mockapi.io/api/v1/' }),
    tagTypes: ['Cards'],
    endpoints: (builder) => ({
        fetchCards: builder.query({
            query: (input) => {
                return {
                    url: `/users/?page=${input.page}&limit=${input.limit}`
                }
            },

            providesTags: ['Cards'],
        }),
        fetchCount: builder.query({
            query: () => {
                return {
                    url: `/users`
                }
            },
            providesTags: ['Cards'],
        }),
    })
})

export const {
    useFetchCardsQuery,
    useFetchCountQuery,
} = cardsApi;