import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const ThreeDStarMap = () => {
  const { isLoading, ThreeDStarBead } = useContext(NailContext);
  // console.log(ThreeDStarBead);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {ThreeDStarBead.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default ThreeDStarMap
