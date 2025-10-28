import { useState } from "react";
import { MoneyContext } from "../Context/MoneyContext";

const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState(+localStorage.getItem("money") || 0);

  return (
    <MoneyContext.Provider value={[money, setMoney]}>
      {children}
    </MoneyContext.Provider>
  );
};

export default MoneyProvider;
