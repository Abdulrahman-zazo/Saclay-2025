import {
  emailImage,
  locationImage,
  ParkingImage,
  PhoneImage,
} from "../../assets/Images";
import { useContact } from "../../Hooks/useContact";
import { UseLoading } from "../../Hooks/useLoading";

function ContactComponent() {
  const isLoading = UseLoading();

  const contact = useContact();

  const contactItems = [
    {
      icon: PhoneImage,
      title: "Téléphone",
      link: `tel:${contact?.phone_number}`,
      text: contact?.phone_number,
    },
    {
      icon: emailImage,
      title: "Mail",
      link: `mailto:${contact?.email}`,
      text: contact?.phone_number,
    },
    {
      icon: locationImage,
      title: "Adresse",
      link: "https://maps.app.goo.gl/eCmdzidAhrUDUVRVA",
      text: "2 Sentier de la Voie Verte - 91400 Orsay",
    },
    {
      icon: ParkingImage,
      title: "Parking",
      link: "https://maps.app.goo.gl/35aKnnsddDNXmDgQ6",
      text: "Du bois des Rames (à 100m)",
    },
  ];

  return isLoading.isLoadingContact ? (
    <div className="flex flex-col items-center w-4/5 mx-auto my-16">
      <div className="h-4 bg-gray-200 rounded-md w-48 mb-4 animate-pulse"></div>

      <div className="h-10 bg-gray-200 rounded-md w-32 my-2 animate-pulse"></div>

      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 mt-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 p-10 rounded-md flex flex-col items-start w-full"
          >
            <div className="w-7 h-7 bg-gray-200 rounded-full animate-pulse mb-4"></div>

            <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse mb-2"></div>

            <div className="h-5 w-full bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center w-4/5 mx-auto my-16">
      <p className="text-secondary font-secondary text-base font-bold uppercase tracking-widest">
        Entrer en contact
      </p>
      <h1 className="text-primary font-primary text-2xl md:text-4xl font-semibold my-2">
        Contact
      </h1>

      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 mt-10">
        {contactItems.map(({ icon, title, link, text }, i) => (
          <div
            key={i}
            className="bg-light-blue p-10 rounded-md flex flex-col items-start w-full"
          >
            <img src={icon} alt="icon" className="w-7 mb-4" />
            <h3 className="text-primary font-secondary text-base md:text-lg font-bold uppercase mb-2">
              {title}
            </h3>
            <div className="text-primary font-secondary text-sm md:text-base leading-snug">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary no-underline"
              >
                {text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactComponent;
