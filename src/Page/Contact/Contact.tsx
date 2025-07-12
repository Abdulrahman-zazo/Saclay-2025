import { useState } from "react";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";

function Contact() {
  const [isMapLoading, setMapLoading] = useState(true);
  return (
    <div className="font-secondary">
      {/* Header */}
      <div className="pt-20 md:pt-[120px]">
        <div
          className="
            h-[250px] md:h-[250px] 
            bg-cover bg-center bg-no-repeat 
            bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860849/about-us-header_gyz1lj.jpg')] 
            max-[900px]:bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860845/specialties-header-mobile_y5alic.webp')]
          "
        >
          <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-center text-left pt-20 px-4 md:px-0 md:w-[40%] md:ml-[200px]">
            <p className="uppercase text-primary text-[18px] max-[900px]:text-center max-[900px]:text-[16px] max-[900px]:text-secondary font-bold tracking-widest">
              Accueil / contact
            </p>
            <h1 className="text-primary font-primary text-[48px] max-[900px]:text-center max-[900px]:text-[28px] font-semibold mt-1">
              Contact
            </h1>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative w-[90%] mx-auto my-8 h-[400px] ">
        {/* الهيكل الذي يظهر أثناء تحميل الخريطة.
        يتم وضعه بشكل مطلق ليغطي نفس مساحة الخريطة.
      */}
        {isMapLoading && (
          <div className="absolute inset-0 w-full h-full bg-gray-200 rounded-md shadow-md animate-pulse"></div>
        )}

        {/* الخريطة الفعلية (iframe).
        - يتم استخدام `onLoad` لتحديث الحالة عند انتهاء تحميل الخريطة.
        - يتم التحكم في شفافية الخريطة لإظهارها بسلاسة بعد التحميل.
      */}
        <iframe
          title="location saclay care center"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.860545286033!2d2.1774462762877302!3d48.70814637131218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e678ad8d0756dd%3A0xbb6a42f395e17557!2s2%20Sent.%20de%20la%20Voie%20Verte%2C%2091400%20Orsay!5e0!3m2!1sfr!2sfr!4v1710088297208!5m2!1sfr!2sfr"
          height="450"
          loading="lazy"
          onLoad={() => setMapLoading(false)}
          className={`w-full h-full border-0 rounded-md shadow-md transition-opacity duration-500 ${
            isMapLoading ? "opacity-0" : "opacity-100"
          }`}
        ></iframe>
      </div>

      {/* Contact Details */}
      <ContactCopmonent />
    </div>
  );
}

export default Contact;
