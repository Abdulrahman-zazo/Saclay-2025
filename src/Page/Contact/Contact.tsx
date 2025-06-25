import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
function Contact() {
  return (
    <div>
      <Navbar />
      <div className="Header-contact-section">
        <div className="Header-contact">
          <div className="header-contact-content">
            <p>Accueil / contact</p>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.860545286033!2d2.1774462762877302!3d48.70814637131218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e678ad8d0756dd%3A0xbb6a42f395e17557!2s2%20Sent.%20de%20la%20Voie%20Verte%2C%2091400%20Orsay!5e0!3m2!1sfr!2sfr!4v1710088297208!5m2!1sfr!2sfr"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactCopmonent />
      <Footer />
    </div>
  );
}

export default Contact;
