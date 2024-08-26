import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const KitwithTraningMap = () => {
  const { isLoading, KitwithTraning } = useContext(NailContext);
  // console.log(KitwithTraning);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {KitwithTraning.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default KitwithTraningMap
