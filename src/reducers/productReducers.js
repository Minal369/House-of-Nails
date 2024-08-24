const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const brand = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.category === "Brand";
      });
      const sugerpop = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "Suger POP";
      });
      const nykaa = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "Nykaa";
      });
      const lakme = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "Lakme";
      });
      const debelle = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "Debelle";
      });
      const elle = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "Elle18";
      });
      const juciegloss = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "JucieGloss";
      });
      const kaybeauty = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "KayBeauty";
      });
      const face = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "Faces";
      });
      const colorbar = action.payload.filter((mixedPD) => {
        // console.log(mixedPD.title);
        return mixedPD.title === "Colorbar";
      });
      return {
        ...state,
        isLoading: false,
        NailProducts: action.payload,
        Brand: brand,
        SugerPOP: sugerpop,
        Nykaa: nykaa,
        Lakme: lakme,
        Debelle: debelle,
        JucieGloss: juciegloss,
        Elle18: elle,
        KayBeauty: kaybeauty,
        Faces: face,
        Colorbar: colorbar,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      break;
  }
  return state;
};

export default productReducer;
