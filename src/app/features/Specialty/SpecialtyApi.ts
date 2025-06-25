import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Get_All_Doctors_in_Specialty,
  Get_All_Services_in_Specialty,
  get_All_Specialties,
  show_Specialty,
} from "../../../api/Server";

export const SpecialtyApi = createApi({
  reducerPath: "SpecialtyApi",
  tagTypes: ["Specialty"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllSpecialties: builder.query({
      query: () => ({
        url: get_All_Specialties,
      }),
      providesTags: ["Specialty"],
    }),
    GetAllServicesInSpecialty: builder.query({
      query: (specialty_id: string) => ({
        url: Get_All_Services_in_Specialty,
        method: "POST",
        body: { specialty_id },
      }),
      providesTags: ["Specialty"],
    }),
    GetAllDoctorsInSpecialty: builder.query({
      query: (specialty_id: string) => ({
        url: Get_All_Doctors_in_Specialty,
        method: "POST",
        body: { specialty_id },
      }),
      providesTags: ["Specialty"],
    }),
    getSpecialtyById: builder.query({
      query: (specialty_id: string) => ({
        url: show_Specialty,
        method: "POST",
        body: { specialty_id },
      }),
      providesTags: ["Specialty"],
    }),
  }),
});

export const {
  useGetAllSpecialtiesQuery,
  useGetAllDoctorsInSpecialtyQuery,
  useGetAllServicesInSpecialtyQuery,
  useGetSpecialtyByIdQuery,
} = SpecialtyApi;
