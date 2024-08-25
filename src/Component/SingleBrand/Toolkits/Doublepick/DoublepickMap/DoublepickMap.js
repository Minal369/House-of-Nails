import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const DoublepickMap = () => {
  const { isLoading, DoublePick } = useContext(NailContext);
  // console.log(DoublePick);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {DoublePick.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default DoublepickMap
