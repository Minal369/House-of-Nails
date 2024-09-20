import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducers";
import axios from "axios";

//  Create Context
const NailContext = createContext();

const API = "https://all-product-api.onrender.com/allProduct";

const initialState = {
  isLoading: false,
  isError: false,
  NailProducts: [],
  Brand: [],
  SugerPOP: [],
  Nykaa: [],
  Lakme: [],
  Debelle: [],
  JucieGloss: [],
  Elle18: [],
  KayBeauty: [],
  Faces: [],
  Colorbar: [],
  Stickers: [],
  Letters: [],
  MickeyMouseStickers: [],
  FlowerStickers: [],
  FruitStickers: [],
  LeafyModernStickers: [],
  ThreeDStickers: [],
  Toolkit: [],
  FlatNailClippers: [],
  ObliqueNailClippers: [],
  SmallNailClippers: [],
  DeadSkinPlier: [],
  NailFile: [],
  DoublePick: [],
  DeadSkinPush: [],
  DeadSkinShovel: [],
  Jwellery: [],
  MetalNailsBeads: [],
  BowKnot: [],
  ThreeDShellFlower: [],
  PinkCrystalStone: [],
  PearlBeads: [],
  ThreeDStarBead: [],
  ArtKit: [],
  KitwithoutTraning: [],
  KitwithTraning: [],
  NewIn: [],
  GLAMBuffingMachine: [],
  LYNNailBuffing: [],
  GLAMUVLEDLamp: [],
  isSingleLoading: false,
  SingleProducts: {},
  isSingleApiError: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const allProduct = res.data;
      // console.log(NailProducts);
      dispatch({ type: "SET_API_DATA", payload: allProduct });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // Single Product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const SingleProducts = res.data;
      dispatch({ type: "SET_SINGLE_DATA", payload: SingleProducts });
    } catch (error) {
      dispatch({ type: "SINGLE_API_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <NailContext.Provider value={{ ...state, getSingleProduct }}>{children}</NailContext.Provider>
  );
};

const useMinalContext = () => {
  return useContext(NailContext);
};

export { AppProvider, NailContext, useMinalContext };
