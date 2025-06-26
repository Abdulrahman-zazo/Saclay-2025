import {
  emailImage,
  locationImage,
  ParkingImage,
  PhoneImage,
} from "../../assets/Images";
import { useContact } from "../Context";

function ContactComponent() {
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

  return (
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
