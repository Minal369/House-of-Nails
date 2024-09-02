import React from 'react'
import { useOfferContext } from '../../../../Context/OfferContext';
import AllItemsLayout from '../../../AllItemsLayout/AllItemsLayout';

const OfferCrystalsMap = () => {
  const { isLoading, CrystalNails } = useOfferContext();
  // console.log(CrystalNails);
  if (isLoading) {
    return <div>... loading</div>;
  }

  return (
    <>
      {CrystalNails.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
}

export default OfferCrystalsMap
