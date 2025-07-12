import { useContext } from "react";
import { ContactContext } from "../contexts/Context";

export const useContact = () => useContext(ContactContext);
