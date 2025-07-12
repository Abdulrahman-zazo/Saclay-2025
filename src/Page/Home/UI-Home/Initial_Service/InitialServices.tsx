import ServicesComponent from "../../../../Components/Services/ServicesComponent";
import { useServices } from "../../../../Hooks/useServices";
import { useSpecialties } from "../../../../Hooks/useSpecialties";
function InitialServices() {
  const Specialties = useSpecialties();
  const Services = useServices();
  return (
    // services
    <div id="Services">
      <ServicesComponent
        Specialties={Specialties || []}
        Services={Services || []}
      />
    </div>
  );
}

export default InitialServices;
