import { createContext } from "react";
import { CatsInfo } from "../types/shared";

export type SelectionContextType = {
  selectedBreed: string;
  setSelectedBreed: (breed: string) => void;
  selectedCat: string;
  setSelectedCat: (cat: string) => void;
  catsInfo: CatsInfo[];
  setCatsInfo: (catsInfo: CatsInfo[]) => void;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export default SelectionContext;
