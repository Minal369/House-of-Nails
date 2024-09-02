import React from 'react'
import { useOfferContext } from '../../../../Context/OfferContext';
import AllItemsLayout from '../../../AllItemsLayout/AllItemsLayout';

const OfferToolKitsMap = () => {
  const { isLoading, NailsToolKits } = useOfferContext();
  // console.log(NailsToolKits);
  if (isLoading) {
    return <div>... loading</div>;
  }

  return (
    <>
      {NailsToolKits.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
}

export default OfferToolKitsMap
