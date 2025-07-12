function Header() {
  return (
    <div className="pt-20 md:pt-[120px]">
      <div
        className="
          h-[600px] bg-cover bg-center bg-no-repeat 
          bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860847/header-home_mfilp8.webp')] 
          max-[900px]:h-[375px] 
          max-[900px]:bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860846/header-home-mobile_1_wxjljr.webp')]
        "
      >
        <div
          className="
            flex flex-col justify-center text-left 
            md:w-[40%] md:ml-[100px] pt-[150px] px-4
            max-[900px]:items-center max-[900px]:text-center max-[900px]:pt-[200px]
            animate-[slide-right_0.5s_cubic-bezier(0.25,0.46,0.45,0.94)_both]
          "
        >
          <p className="uppercase text-secondary text-[28px] max-[900px]:text-[16px] font-bold tracking-[2.24px]">
            Prendre soin de la vie
          </p>
          <h1 className="text-primary font-primary text-[48px] max-[900px]:text-[28px] font-semibold mt-5 leading-normal">
            Au service du bien-être et de la santé de tous
          </h1>

          <div className="mt-10 max-[900px]:mt-4">
            <a
              href="#Services"
              className="inline-block bg-light-blue text-primary text-[16px] font-medium font-secondary py-3 px-6 rounded-full transition hover:bg-secondary hover:text-white"
            >
              Nos services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
