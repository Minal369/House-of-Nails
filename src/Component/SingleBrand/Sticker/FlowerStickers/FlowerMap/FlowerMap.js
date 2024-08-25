import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const FlowerMap = () => {
  const { isLoading, FlowerStickers } = useContext(NailContext);
  // console.log(FlowerStickers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {FlowerStickers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default FlowerMap
