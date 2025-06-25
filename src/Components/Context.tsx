// contexts/DoctorsContext.ts
import { createContext, useContext } from "react";
import type {
  Contact,
  Doctor,
  Recommendation,
  Service,
  Specialty,
} from "../Types";

export const DoctorsContext = createContext<Doctor[] | null>(null);
export const useDoctors = () => useContext(DoctorsContext);

// contexts/ServicesContext.ts

export const ServicesContext = createContext<Service[] | null>(null);
export const useServices = () => useContext(ServicesContext);

// contexts/SpecialtiesContext.ts

export const SpecialtiesContext = createContext<Specialty[] | null>(null);
export const useSpecialties = () => useContext(SpecialtiesContext);

// contexts/ContactContext.ts

export const ContactContext = createContext<Contact | null>(null);
export const useContact = () => useContext(ContactContext);

export const RecommendationContext = createContext<Recommendation[] | null>(
  null
);
export const useRecommendation = () => useContext(RecommendationContext);
