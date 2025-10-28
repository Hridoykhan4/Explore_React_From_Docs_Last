import { createContext } from "react";

export const MoneyContext = createContext(
  +(localStorage.getItem("money")) || 0
);
