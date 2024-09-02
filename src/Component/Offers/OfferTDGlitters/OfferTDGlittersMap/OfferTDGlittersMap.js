import React from 'react'
import { useOfferContext } from '../../../../Context/OfferContext';
import AllItemsLayout from '../../../AllItemsLayout/AllItemsLayout';

const OfferTDGlittersMap = () => {
  const { isLoading, ThreeDGlitter } = useOfferContext();
  // console.log(ThreeDGlitter);
  if (isLoading) {
    return <div>... loading</div>;
  }

  return (
    <>
      {ThreeDGlitter.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
}

export default OfferTDGlittersMap
