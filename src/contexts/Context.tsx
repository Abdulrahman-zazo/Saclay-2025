// contexts/DoctorsContext.ts
import { createContext } from "react";
import type {
  Contact,
  Doctor,
  LoadingContextType,
  Recommendation,
  Service,
  Specialty,
} from "../Types";

export const LoadingContext = createContext<LoadingContextType>({
  isLoadingDoctors: false,
  isLoadingServices: false,
  isLoadingSpecialties: false,
  isLoadingContact: false,
  isLoadingRecommendation: false,
});

export const DoctorsContext = createContext<Doctor[] | null>(null);

// contexts/ServicesContext.ts

export const ServicesContext = createContext<Service[] | null>(null);

// contexts/SpecialtiesContext.ts

export const SpecialtiesContext = createContext<Specialty[] | null>(null);

// contexts/ContactContext.ts

export const ContactContext = createContext<Contact | null>(null);

export const RecommendationContext = createContext<Recommendation[] | null>(
  null
);
