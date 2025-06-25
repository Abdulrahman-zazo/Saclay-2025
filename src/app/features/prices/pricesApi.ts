import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Get_All_area_price,
  Get_All_type,
  Get_Areas_Price_Of_Type,
} from "../../../api/Server";

export const TypesApi = createApi({
  reducerPath: "TypesApi",
  tagTypes: ["Types"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllTypes: builder.query({
      query: () => ({
        url: Get_All_type,
      }),
      providesTags: ["Types"],
    }),
    getAreasAndPriceByTypeId: builder.query({
      query: (type_id: number) => ({
        url: Get_Areas_Price_Of_Type,
        method: "POST",
        body: { type_id },
      }),
      providesTags: ["Types"],
    }),
    getAllAriaPrice: builder.query({
      query: () => ({
        url: Get_All_area_price,
      }),
      providesTags: ["Types"],
    }),
  }),
});

export const {
  useGetAreasAndPriceByTypeIdQuery,
  useGetAllTypesQuery,
  useGetAllAriaPriceQuery,
} = TypesApi;
