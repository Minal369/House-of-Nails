import React from 'react'
import { useOfferContext } from '../../../../Context/OfferContext';
import AllItemsLayout from '../../../AllItemsLayout/AllItemsLayout';

const OfferStripingTapesMap = () => {
  const { isLoading, StripingTape } = useOfferContext();
  // console.log(StripingTape);
  if (isLoading) {
    return <div>... loading</div>;
  }

  return (
    <>
      {StripingTape.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
}

export default OfferStripingTapesMap
