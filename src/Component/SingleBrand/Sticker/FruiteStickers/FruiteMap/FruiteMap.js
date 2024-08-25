import React, { useContext } from 'react'
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';
import { NailContext } from '../../../../../Context/ProductContext';

const FruiteMap = () => {
  const { isLoading, FruitStickers } = useContext(NailContext);
  // console.log(FruitStickers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {FruitStickers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default FruiteMap
