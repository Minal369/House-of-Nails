import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducers";
import axios from "axios";

//  Create Context
const NailContext = createContext();

const API =
  "https://raw.githubusercontent.com/Minal369/API-Nails-Data/main/NailProducts.json";

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
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const NailProducts = res.data;
      // console.log(NailProducts);
      dispatch({ type: "SET_API_DATA", payload: NailProducts.allProduct });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);

  return (
    <NailContext.Provider value={{ ...state }}>{children}</NailContext.Provider>
  );
};

const useMinalContext = () => {
  return useContext(NailContext);
};

export { AppProvider, NailContext, useMinalContext };
