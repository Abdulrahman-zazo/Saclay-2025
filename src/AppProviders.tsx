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
  LoadingContext,
} from "./contexts/Context";

function AppProviders({ children }: { children: React.ReactNode }) {
  const { data: doctors, isLoading: isLoadingDoctors } = useGetAllDoctorsQuery(
    {}
  );
  const { data: services, isLoading: isLoadingServices } =
    useGetAllServicesQuery({});
  const { data: specialties, isLoading: isLoadingSpecialties } =
    useGetAllSpecialtiesQuery({});
  const { data: contact, isLoading: isLoadingContact } = useGetContactQuery({});
  const { data: Recommendation, isLoading: isLoadingRecommendation } =
    useGetALLRecommendationsQuery({});

  return (
    <LoadingContext.Provider
      value={{
        isLoadingDoctors,
        isLoadingServices,
        isLoadingSpecialties,
        isLoadingContact,
        isLoadingRecommendation,
      }}
    >
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
    </LoadingContext.Provider>
  );
}

export default AppProviders;
