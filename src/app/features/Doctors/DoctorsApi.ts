import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get_All_Doctors } from "../../../api/Server";

export const DoctorsApi = createApi({
  reducerPath: "DoctorsApi",
  tagTypes: ["Doctors"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllDoctors: builder.query({
      query: () => ({
        url: get_All_Doctors,
      }),
      providesTags: ["Doctors"],
    }),
  }),
});

export const { useGetAllDoctorsQuery } = DoctorsApi;
