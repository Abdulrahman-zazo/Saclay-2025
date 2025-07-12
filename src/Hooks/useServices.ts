import { useContext } from "react";
import { ServicesContext } from "../contexts/Context";

export const useServices = () => useContext(ServicesContext);
