import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Bookings'],
    endpoints: (builder) => ({
        getBookings: builder.query({
            query: () => 'bookings',
            providesTags: ['Bookings']
        }),

    })
})

export const { useGetBookingsQuery } = apiSlice