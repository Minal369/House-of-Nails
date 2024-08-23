import React, { useContext } from "react";
import AllItemsLayout from "../../../AllItemsLayout/AllItemsLayout";
import { NailContext } from "../../../../Context/ProductContext";

const SugerpopMap = () => {
    const {isLoading,SugerPOP} = useContext(NailContext)
    // console.log(SugerPOP);
    
    if (isLoading){
        return <div>....Loading</div>
    }
  return (
    <>
      {SugerPOP.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
      
    </>
  );
};

export default SugerpopMap;
