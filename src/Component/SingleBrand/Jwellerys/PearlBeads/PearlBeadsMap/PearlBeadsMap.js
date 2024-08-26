import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const PearlBeadsMap = () => {
  const { isLoading, PearlBeads } = useContext(NailContext);
  // console.log(PearlBeads);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {PearlBeads.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default PearlBeadsMap
