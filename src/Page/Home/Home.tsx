import InitialDoctors from "../../Components/Doctors/InitialDoctors";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";

import Header from "./UI-Home/Header/Header";
import InitialDefinition from "./UI-Home/Initial_Definition/InitialDefinition";
import InitialServices from "./UI-Home/Initial_Service/InitialServices";

function Home() {
  return (
    <>
      <Header />
      <InitialDefinition />
      <InitialServices />
      <InitialDoctors slice={3} />
      <ContactCopmonent />
    </>
  );
}

export default Home;
