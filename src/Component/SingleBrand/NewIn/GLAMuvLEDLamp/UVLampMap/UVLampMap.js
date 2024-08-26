import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const UVLampMap = () => {
  const { isLoading, GLAMUVLEDLamp } = useContext(NailContext);
  // console.log(GLAMUVLEDLamp);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {GLAMUVLEDLamp.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default UVLampMap
