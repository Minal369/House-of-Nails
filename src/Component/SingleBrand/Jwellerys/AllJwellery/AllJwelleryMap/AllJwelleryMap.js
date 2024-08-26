import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const AllJwelleryMap = () => {
  const { isLoading, Jwellery } = useContext(NailContext);
  // console.log(Jwellery);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Jwellery.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default AllJwelleryMap
