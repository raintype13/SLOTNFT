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
export const listingsApi = createApi({
  reducerPath: "listingsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/listings/" }),
  endpoints: (builder) => ({
    getListings: builder.query({
      query: (page: number) => {
        console.log("getListings page", page);
        return `/?page=${page}`;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetListingsQuery } = listingsApi;
