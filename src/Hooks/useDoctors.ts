import { useContext } from "react";
import { DoctorsContext } from "../contexts/Context";

export const useDoctors = () => useContext(DoctorsContext);
