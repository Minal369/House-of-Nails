import React, { useContext } from 'react'
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';
import { NailContext } from '../../../../../Context/ProductContext';

const DebellMap = () => {
    const { isLoading, Debelle } = useContext(NailContext);
    console.log(Debelle);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Debelle.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default DebellMap
