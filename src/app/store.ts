import { configureStore } from "@reduxjs/toolkit";
import { SpecialtyApi } from "./features/Specialty/SpecialtyApi";
import { ServicesApi } from "./features/Services/ServicesApi";
import { contactApi } from "./features/Contacts/contactApi";
import { DoctorsApi } from "./features/Doctors/DoctorsApi";
import { RecommendationsApi } from "./features/Recommendations/RecommendationsApi";
import { TypesApi } from "./features/prices/pricesApi";

export const store = configureStore({
  reducer: {
    [SpecialtyApi.reducerPath]: SpecialtyApi.reducer,
    [ServicesApi.reducerPath]: ServicesApi.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
    [DoctorsApi.reducerPath]: DoctorsApi.reducer,
    [RecommendationsApi.reducerPath]: RecommendationsApi.reducer,
    [TypesApi.reducerPath]: TypesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      SpecialtyApi.middleware,
      ServicesApi.middleware,
      contactApi.middleware,
      DoctorsApi.middleware,
      RecommendationsApi.middleware,
      TypesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
