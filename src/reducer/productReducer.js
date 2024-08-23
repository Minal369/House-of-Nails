const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
        const sugerpop = action.payload.filter((mixedPD)=> {
            // console.log(mixedPD.title);
            return mixedPD.title === "Suger POP"
        })
        const nykaa = action.payload.filter((mixedPD)=> {
            // console.log(mixedPD.title);
            return mixedPD.title === "Nykaa"
        })
      return {
        ...state,
        isLoading: false,
        NailProducts: action.payload,
        SugerPOP: sugerpop,
        Nykaa: nykaa,
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
