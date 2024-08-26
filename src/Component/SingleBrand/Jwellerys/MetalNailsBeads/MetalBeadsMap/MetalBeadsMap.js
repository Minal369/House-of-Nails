import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const MetalBeadsMap = () => {
  const { isLoading, MetalNailsBeads } = useContext(NailContext);
  // console.log(MetalNailsBeads);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {MetalNailsBeads.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default MetalBeadsMap
