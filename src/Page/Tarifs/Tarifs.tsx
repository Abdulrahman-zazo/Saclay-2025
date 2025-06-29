import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import TarifsTables from "../../Components/TarifsTables/TarifsTables";
import { useGetContactQuery } from "../../app/features/Contacts/contactApi";

function Tarifs() {
  const { data } = useGetContactQuery({});

  return (
    <div className="font-secondary">
      {/* Header Section */}
      <div className="pt-[120px]">
        <div
          className="
            h-[250px] bg-cover bg-center bg-no-repeat 
            bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860846/Initial-definition_uftisy.webp')] 
            max-[900px]:h-[375px] 
            max-[900px]:bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860845/specialties-header-mobile_y5alic.webp')]
          "
        >
          <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-center pt-20 px-4 md:px-0 md:w-[40%] md:ml-[200px]">
            <p className="uppercase text-primary text-[18px] max-[900px]:text-[16px] font-medium tracking-widest max-[900px]:text-center">
              Accueil / Tarifs
            </p>
            <h1 className="text-primary font-primary text-[48px] max-[900px]:text-[28px] font-semibold mt-1 max-[900px]:text-center">
              Tarifs
            </h1>
          </div>
        </div>
      </div>

      {/* Tarifs Section */}
      <section className="w-[90%] max-w-screen-xl mx-auto my-10 flex flex-col items-center text-center">
        <p className="text-secondary text-sm sm:text-base uppercase font-bold tracking-[2.24px]">
          Au centre Saclay care, nous croyons à la transparence avec nos
          patients, et proposons des prix justes.
        </p>

        <h1 className="text-primary font-primary text-lg sm:text-3xl font-semibold mt-4 mb-6">
          Nos tarifs d’épilation laser à la séance
        </h1>

        {data?.Contact?.doctolib_url && (
          <a
            title="doctolib"
            href={data?.Contact.doctolib_url}
            target="_blank"
            rel="noreferrer"
            className="text-primary bg-light-blue px-6 py-3 rounded-full text-[16px] font-medium transition hover:bg-secondary hover:text-white"
          >
            Prise de RDV
          </a>
        )}
      </section>

      <TarifsTables />
      <ContactCopmonent />
    </div>
  );
}

export default Tarifs;
