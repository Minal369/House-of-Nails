import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const ThreeDMap = () => {
  const { isLoading, ThreeDStickers } = useContext(NailContext);
  // console.log(ThreeDStickers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {ThreeDStickers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default ThreeDMap
