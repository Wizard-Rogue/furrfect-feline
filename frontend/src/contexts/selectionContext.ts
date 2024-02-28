import { createContext } from "react";

export type SelectionContextType = {
  selectedBreed: string;
  setSelectedBreed: (breed: string) => void;
};

const SelectionContext = createContext<SelectionContextType | null>(null);

export default SelectionContext;
