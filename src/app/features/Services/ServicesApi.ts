import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get_All_Services, show_Service } from "../../../api/Server";

export const ServicesApi = createApi({
  reducerPath: "ServicesApi",
  tagTypes: ["Services"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: get_All_Services,
      }),
      providesTags: ["Services"],
    }),
    getServicesById: builder.query({
      query: (Services_id: string) => ({
        url: show_Service,
        method: "POST",
        body: { service_id: Services_id },
      }),
      providesTags: ["Services"],
    }),
  }),
});

export const { useGetAllServicesQuery, useGetServicesByIdQuery } = ServicesApi;
