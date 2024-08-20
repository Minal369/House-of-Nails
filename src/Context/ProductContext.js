import { createContext } from "react";
import { mixedProduct } from "../Component/API-Data/mixedProduct";
import { nykaa, sugerpop } from "../Component/API-Data/Data";

//  Create Context
const NailContext = createContext();

const AppProvider = ({ children }) => {
//   const [item, setItem] = useState(mixedProduct);
  return <NailContext.Provider value={{mixedProduct,sugerpop,nykaa}}>{children}</NailContext.Provider>;
};

export { AppProvider, NailContext };
