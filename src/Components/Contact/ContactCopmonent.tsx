import "./Contact.css";

import {
  emailImage,
  locationImage,
  ParkingImage,
  PhoneImage,
} from "../../assets/Images";
import { useContact } from "../Context";

function ContactCopmonent() {
  const contact = useContact();

  return (
    <div className="Contact">
      <p>Entrer en contact</p>
      <h1>Contact</h1>
      <div className="Contact-element">
        <div className="contact-card">
          <img src={PhoneImage} alt="contact" />
          <h3> Téléphone</h3>
          <div className="text-contact-card">
            <a href={`tel:${contact?.phone_number}`} target="_blank">
              {contact?.phone_number}
            </a>
          </div>
        </div>
        <div className="contact-card">
          <img src={emailImage} alt="contact" />
          <h3>Mail</h3>
          <div className="text-contact-card">
            <a href={`mailto:${contact?.email}`} target="_blank">
              {contact?.email}
            </a>
          </div>
        </div>
        <div className="contact-card">
          <img src={locationImage} alt="contact" />
          <h3>Adresse</h3>
          <div className="text-contact-card">
            <a href="https://maps.app.goo.gl/eCmdzidAhrUDUVRVA" target="_blank">
              2 Sentier de la Voie Verte - 91400 Orsay
            </a>
          </div>
        </div>

        <div className="contact-card">
          <img src={ParkingImage} alt="contact" />

          <h3>Parking</h3>
          <div className="text-contact-card">
            <a href="https://maps.app.goo.gl/35aKnnsddDNXmDgQ6" target="_blank">
              Du bois des Rames (à 100m)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCopmonent;
