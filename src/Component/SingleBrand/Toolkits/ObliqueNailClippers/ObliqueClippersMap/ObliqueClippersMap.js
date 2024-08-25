import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const ObliqueClippersMap = () => {
  const { isLoading, ObliqueNailClippers} = useContext(NailContext);
  // console.log(ObliqueNailClippers);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {ObliqueNailClippers.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default ObliqueClippersMap
