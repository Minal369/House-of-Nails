import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const ThreeDShellFlowerMap = () => {
  const { isLoading, ThreeDShellFlower } = useContext(NailContext);
  // console.log(ThreeDShellFlower);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {ThreeDShellFlower.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default ThreeDShellFlowerMap
