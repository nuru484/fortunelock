// src/redux/api/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: ["User", "GoldPrice"],
  endpoints: (builder) => ({
    authUser: builder.query({
      query: () => `auth`,
      keepUnusedDataFor: 300,
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["User"],
    }),
    signupUser: builder.mutation({
      query: ({ email, password, firstName, lastName, country }) => ({
        url: "signup",
        method: "POST",
        body: { email, password, firstName, lastName, country },
      }),
      invalidatesTags: ["User"],
    }),
    getGoldPrices: builder.query({
      query: ({ currency, type, days }) => ({
        url: `gold/price?currency=${currency}&type=${type}&days=${days}`,
      }),
      providesTags: ["GoldPrice"],
    }),
    updateGoldPrices: builder.mutation({
      query: () => ({
        url: "gold/price",
        method: "POST",
      }),
      invalidatesTags: ["GoldPrice"],
    }),
  }),
});

export const {
  useAuthUserQuery,
  useLoginUserMutation,
  useSignupUserMutation,
  useGetGoldPricesQuery,
  useUpdateGoldPricesMutation,
} = apiSlice;
