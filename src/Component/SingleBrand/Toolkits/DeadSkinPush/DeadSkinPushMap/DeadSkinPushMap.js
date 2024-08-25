import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const DeadSkinPushMap = () => {
  const { isLoading, DeadSkinPush } = useContext(NailContext);
  // console.log(DeadSkinPush);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {DeadSkinPush.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default DeadSkinPushMap
