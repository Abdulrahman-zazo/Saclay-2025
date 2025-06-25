// apiSlice.ts أو contactApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Get_Contact } from "../../../api/Server";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        url: Get_Contact,
      }),
    }),
  }),
});

export const { useGetContactQuery } = contactApi;
