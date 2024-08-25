import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const DeadSkinPlierMap = () => {
  const { isLoading, DeadSkinPlier } = useContext(NailContext);
  // console.log(DeadSkinPlier);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {DeadSkinPlier.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default DeadSkinPlierMap
