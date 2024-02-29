import { createContext } from "react";
import { CatsInfo, PageMetadata } from "../types/shared";

export type SelectionContextType = {
  selectedBreed: string;
  setSelectedBreed: (breed: string) => void;
  catsInfo: CatsInfo[];
  setCatsInfo: (catsInfo: CatsInfo[]) => void;
  pageMetadata: PageMetadata;
  setPageMetadata: (pageMetadata: PageMetadata) => void;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export default SelectionContext;
