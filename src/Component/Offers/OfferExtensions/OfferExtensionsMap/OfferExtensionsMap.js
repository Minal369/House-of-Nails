import React from 'react'
import { useOfferContext } from '../../../../Context/OfferContext';
import AllItemsLayout from '../../../AllItemsLayout/AllItemsLayout';

const OfferExtensionsMap = () => {
  const { isLoading, NailsExtension } = useOfferContext();
  // console.log(NailsExtension);
  if (isLoading) {
    return <div>... loading</div>;
  }

  return (
    <>
      {NailsExtension.map((curElem) => {
        return <AllItemsLayout key={curElem.id} {...curElem} />;
      })}
    </>
  );
}

export default OfferExtensionsMap
