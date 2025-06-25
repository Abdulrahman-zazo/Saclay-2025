import { useGetContactQuery } from "./app/features/Contacts/contactApi";
import { useGetAllDoctorsQuery } from "./app/features/Doctors/DoctorsApi";
import { useGetALLRecommendationsQuery } from "./app/features/Recommendations/RecommendationsApi";
import { useGetAllServicesQuery } from "./app/features/Services/ServicesApi";
import { useGetAllSpecialtiesQuery } from "./app/features/Specialty/SpecialtyApi";
import {
  DoctorsContext,
  ServicesContext,
  SpecialtiesContext,
  ContactContext,
  RecommendationContext,
} from "./Components/Context";

function AppProviders({ children }: { children: React.ReactNode }) {
  const { data: doctors } = useGetAllDoctorsQuery({});
  const { data: services } = useGetAllServicesQuery({});
  const { data: specialties } = useGetAllSpecialtiesQuery({});
  const { data: contact } = useGetContactQuery({});
  const { data: Recommendation } = useGetALLRecommendationsQuery({});

  return (
    <SpecialtiesContext.Provider value={specialties?.Specialties ?? []}>
      <DoctorsContext.Provider value={doctors?.Doctors ?? []}>
        <ServicesContext.Provider value={services?.Services ?? []}>
          <ContactContext.Provider value={contact?.Contact ?? null}>
            <RecommendationContext.Provider
              value={Recommendation?.Recommendation_messages || []}
            >
              {children}
            </RecommendationContext.Provider>
          </ContactContext.Provider>
        </ServicesContext.Provider>
      </DoctorsContext.Provider>
    </SpecialtiesContext.Provider>
  );
}

export default AppProviders;
