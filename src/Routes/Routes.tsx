import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Page/Home/Home";
import Contact from "../Page/Contact/Contact";
import AboutUs from "../Page/AboutUs/AboutUs";
import Doctors from "../Page/DoctorsPage/Doctors";
import Tarifs from "../Page/Tarifs/Tarifs";
import Specialties from "../Page/Specialties/Specialties";
import SingleSpecialties from "../Page/Specialties/SingleSpecialties";
import SingleServices from "../Page/Services/SingleServices";
import Services from "../Page/Services/Services";
import NotFoundPage from "../Page/Notfound/NotFoundPage";
// export const router = createBrowserRouter([

//   {
//     element: <Landing />,
//     path: "/",
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "/h-platform-term", element: <TermsPage /> },
//       { path: "/h-platform-privacy-policy", element: <PrivacyPolicyPage /> },
//       { path: "/courses", element: <CoursessPage /> },
//       { path: "/curricula", element: <CurriculaPage /> },
//       { path: "/offers", element: <OfferPage /> },
//       { path: "/about-us", element: <AboutPage /> },
//       { path: "/auth/login", element: <Login /> },
//       { path: "/auth/forget-password", element: <ForgetPassword /> },
//       { path: "/auth/get-started", element: <Registration /> },
//     ],
//   },

//   {
//     path: "*",
//     element: <Navigate to="/" replace />,
//   },
// ]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/À-propos-de-nous",
    element: <AboutUs />,
  },
  {
    path: "/médecins",
    element: <Doctors />,
  },

  {
    path: "/tarifs",
    element: <Tarifs />,
  },

  {
    path: "/spécialités",
    element: <Specialties />,
  },
  {
    path: "/spécialités/:specialtie_id",
    element: <SingleSpecialties />,
  },
  {
    path: "/Services/:Services_id",
    element: <SingleServices />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);
