import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: [
    "User",
    "GoldPrice",
    "Payment",
    "Wallet",
    "Portfolio",
    "Transaction",
    "GoldItem",
  ],
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
      query: ({
        email,
        password,
        firstName,
        middleName,
        lastName,
        dateOfBirth,
        gender,
        phoneNumber,
        nationality,
        country,
      }) => ({
        url: "signup",
        method: "POST",
        body: {
          email,
          password,
          firstName,
          middleName,
          lastName,
          dateOfBirth,
          gender,
          phoneNumber,
          nationality,
          country,
        },
      }),
      invalidatesTags: ["User"],
    }),
    getGoldPrices: builder.query({
      query: (currency = "USD") => ({
        url: `gold/price?currency=${currency}`,
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
    initializeDeposit: builder.mutation({
      query: ({ amount, currency, callbackUrl }) => ({
        url: "wallet/deposit",
        method: "POST",
        body: { amount, currency, callbackUrl },
      }),
      invalidatesTags: ["Payment", "Wallet"],
    }),
    verifyDeposit: builder.mutation({
      query: ({ reference }) => ({
        url: "wallet/deposit",
        method: "PUT",
        body: { reference },
      }),
      invalidatesTags: ["Payment", "Wallet"],
    }),
    getWalletBalance: builder.query({
      query: () => "wallet/deposit",
      providesTags: ["Wallet"],
    }),
    buyGold: builder.mutation({
      query: ({ grams, currency }) => ({
        url: "gold/buy",
        method: "POST",
        body: { grams, currency },
      }),
      invalidatesTags: ["Wallet", "Portfolio", "Transaction"],
    }),
    getPortfolio: builder.query({
      query: () => "portfolio",
      providesTags: ["Portfolio", "Wallet", "Transaction"],
    }),
    getDashboard: builder.query({
      query: () => "dashboard",
      providesTags: ["User", "Portfolio", "Wallet", "Transaction", "GoldPrice"],
    }),

    // Admin endpoints
    getAllUsers: builder.query({
      query: ({ page = 1, limit = 50, search = "" }) => ({
        url: `users?page=${page}&limit=${limit}&search=${encodeURIComponent(
          search
        )}`,
      }),
      providesTags: ["User"],
    }),
    getUserById: builder.query({
      query: (userId) => `admin/users?userId=${userId}`,
      providesTags: ["User", "Portfolio"],
    }),
    depositPhysicalGold: builder.mutation({
      query: ({ userId, goldItem, pricePerGram, currency, depositDate }) => ({
        url: "admin/deposit-physical-gold",
        method: "POST",
        body: {
          userId,
          goldItem,
          pricePerGram,
          currency,
          depositDate,
        },
      }),
      invalidatesTags: ["Portfolio", "Transaction", "GoldItem", "User"],
    }),
    getAdminDashboard: builder.query({
      query: () => "admin/dashboard",
      providesTags: [
        "User",
        "Portfolio",
        "Wallet",
        "Transaction",
        "GoldPrice",
        "GoldItem",
      ],
    }),
    getUserDetails: builder.query({
      query: (userId) => `users/${userId}/details`,
      providesTags: [
        "User",
        "Portfolio",
        "Wallet",
        "Transaction",
        "GoldItem",
        "Payment",
      ],
    }),
  }),
});

export const {
  useAuthUserQuery,
  useLoginUserMutation,
  useSignupUserMutation,
  useGetGoldPricesQuery,
  useUpdateGoldPricesMutation,
  useInitializeDepositMutation,
  useVerifyDepositMutation,
  useGetWalletBalanceQuery,
  useBuyGoldMutation,
  useGetPortfolioQuery,
  useGetDashboardQuery,

  // Admin hooks
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useDepositPhysicalGoldMutation,
  useGetAdminDashboardQuery,
  useGetUserDetailsQuery,
} = apiSlice;
