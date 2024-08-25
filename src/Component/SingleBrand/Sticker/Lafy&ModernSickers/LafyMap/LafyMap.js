import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const LafyMap = () => {
  const { isLoading, LeafyModernStickers } = useContext(NailContext);
  // console.log(LeafyModernStickers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {LeafyModernStickers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default LafyMap
