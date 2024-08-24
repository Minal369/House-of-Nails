import React, { useContext } from 'react'
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';
import { NailContext } from '../../../../../Context/ProductContext';

const Elle18Map = () => {
    const { isLoading, Elle18 } = useContext(NailContext);
    // console.log(Elle18);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Elle18.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default Elle18Map
