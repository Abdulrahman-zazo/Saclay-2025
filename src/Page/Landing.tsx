import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar/Navbar";
import ScrollToTop from "../utils/ScrollToTop";
import Footer from "../Components/Footer/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default Landing;
