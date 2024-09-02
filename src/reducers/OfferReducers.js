const OfferReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_OFFERS_DATA":
      const combonails = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "ComboNailPaints";
      });
      const nailremover = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "NailsRemover";
      });
      const nailextension = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "NailsExtension";
      });
      const nailsticker = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "NailStickers";
      });
      const crystals = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "CrystalNails";
      });
      const threedglitter = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "ThreeDGlitter";
      });
      const stripingtape = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "StripingTape";
      });
      const nailtool = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "NailsToolKits";
      });
      
      return {
        ...state,
        isLoading: false,
        allOffers: action.payload,
        ComboNailPaints: combonails,
        NailsRemover: nailremover,
        NailsExtension: nailextension,
        NailStickers: nailsticker,
        CrystalNails: crystals,
        ThreeDGlitter: threedglitter,
        StripingTape: stripingtape,
        NailsToolKits: nailtool,
      };

    case "SET_OFFER_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default OfferReducer;
