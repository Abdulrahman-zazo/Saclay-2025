import { useServices, useSpecialties } from "../../../../Components/Context";
import ServicesComponent from "../../../../Components/Services/ServicesComponent";
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
