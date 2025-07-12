import { useContext } from "react";
import { RecommendationContext } from "../contexts/Context";

export const useRecommendation = () => useContext(RecommendationContext);
