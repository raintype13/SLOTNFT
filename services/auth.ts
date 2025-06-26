// Need to use the React-specific entry point to import createApi
import {
  createApi,
  BaseQueryFn,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// const getAuthQuery: BaseQueryFn<void, unknown> = () => {
//   return {}
// };

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/auth/" }),
  endpoints: (builder) => ({
    getTwitterOAuthToken: builder.query({
      query: () => `twitter/token`,
    }),
    verifyTwitterCallbackTokens: builder.mutation({
      query: (postBody) => {
        return {
          url: "twitter",
          method: "POST",
          body: postBody,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useVerifyTwitterCallbackTokensMutation,
  useLazyGetTwitterOAuthTokenQuery,
} = authApi;
