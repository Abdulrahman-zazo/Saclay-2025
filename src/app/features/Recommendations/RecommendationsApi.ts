import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Get_All_recommendation_messages } from "../../../api/Server";

export const RecommendationsApi = createApi({
  reducerPath: "RecommendationsApi",
  tagTypes: ["Recommendations"],
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    GetALLRecommendations: builder.query({
      query: () => ({
        url: Get_All_recommendation_messages,
      }),
      providesTags: ["Recommendations"],
    }),
  }),
});

export const { useGetALLRecommendationsQuery } = RecommendationsApi;
