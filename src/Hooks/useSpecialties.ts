import { useContext } from "react";
import { SpecialtiesContext } from "../contexts/Context";

export const useSpecialties = () => useContext(SpecialtiesContext);
