import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/OfferReducers";

const OfferContext = createContext();

const API = "https://offer-api.onrender.com/allOffers";

const initialState = {
  isLoading: false,
  isError: false,
  allOffers: [],
  ComboNailPaints: [],
  NailsRemover: [],
  NailsExtension: [],
  NailStickers: [],
  CrystalNails: [],
  ThreeDGlitter: [],
  StripingTape: [],
  NailsToolKits: [],
};

const OfferProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({type:"SET_IS_LOADING"})
    try {
      const res = await axios.get(url);
      const allOffers = res.data;
    //   console.log(allOffers);
      dispatch({ type: "SET_OFFERS_DATA", payload: allOffers });
    } catch (error) {
        dispatch({type:"SET_OFFER_ERROR"})
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <OfferContext.Provider value={{ ...state }}>
      {children}
    </OfferContext.Provider>
  );
};

const useOfferContext = () => {
  return useContext(OfferContext);
};

export { OfferContext, OfferProvider, useOfferContext };
