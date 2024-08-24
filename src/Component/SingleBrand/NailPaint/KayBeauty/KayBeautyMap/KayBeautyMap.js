import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const KayBeautyMap = () => {
  const { isLoading,  KayBeauty } = useContext(NailContext);
    // console.log( KayBeauty);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      { KayBeauty.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default KayBeautyMap
