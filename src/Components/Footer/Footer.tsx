import "./Footer.css";
import { Link } from "react-router-dom";

import { Facebook, Instagram } from "lucide-react";
import { doctolib, doctolibtext2, LogoNyve } from "../../assets/Images";
import { useContact } from "../Context";

function Footer() {
  const Contact = useContact();
  const date = new Date();
  return (
    <footer className="footer">
      <div className="element-footer">
        <div className="img-footer">
          <img src={LogoNyve} alt="Saclay Care Centre Logo" />
        </div>

        <div className="link-footer">
          <h3>Liens importants</h3>
          <ul>
            <li>
              <Link to="/" className="footer-link-btn">
                Prise de RDV
              </Link>
            </li>
            <br />
            <li>
              <Link to={"/médecins"} className="footer-link-btn">
                Médecins
              </Link>
            </li>
            <br />

            <li>
              <Link to={"/services"} className="footer-link-btn">
                Services
              </Link>
            </li>

            <li>
              <Link to={"/À-propos-de-nous"} className="footer-link-btn">
                À propos de nous
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-footer">
          <h3>Contactez-nous</h3>
          <ul>
            <p>
              Téléphone :
              <a href={`tel:${Contact?.phone_number}`} target="_blank">
                {" "}
                {Contact?.phone_number}
              </a>
            </p>
            <br />

            <p>
              Mail :
              <a href={`mailto:${Contact?.email}`} target="_blank">
                {" "}
                {Contact?.email}
              </a>
            </p>
            <br />

            <p>
              Adresse :{" "}
              <a
                href="https://maps.app.goo.gl/eCmdzidAhrUDUVRVA"
                target="_blank"
              >
                {" "}
                2 Sentier de la Voie Verte - 91400 Orsay
              </a>
            </p>
            <br />

            <p>
              Parking :{" "}
              <a
                href="https://maps.app.goo.gl/35aKnnsddDNXmDgQ6"
                target="_blank"
              >
                Du bois des Rames (à 100 m)
              </a>
            </p>
          </ul>
        </div>

        <div className="btn-appointment-footer-or">
          <h3>Prenez rendez-vous</h3>
          <a href={`${Contact?.doctolib_url}`} target="_blank" rel="noreferrer">
            Prise de RDV (
            <img
              src={doctolibtext2}
              width={55}
              alt="Prise de RDV"
              style={{ margin: "0px 5px" }}
            />
            )
          </a>
        </div>
      </div>
      <div className="divider" />
      <div className="under-footer">
        <div className="under">
          <p>© {date.getFullYear()} CENTRE DE SOINS DE SACLAY</p>
          <a href="https://veguscode.com" target="_blank">
            par l'équipe de VEGUS CODE
          </a>
        </div>
        <div className="icon-footer">
          <a
            className="social-media-footer"
            href={`${Contact?.facebook_url}`}
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            className="social-media-footer"
            href={`${Contact?.whatsapp_url}`}
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            className="social-media-footer"
            href={`${Contact?.doctolib_url}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={doctolib} width={15} alt="doctolib" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
