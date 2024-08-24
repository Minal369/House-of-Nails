import React, { useContext } from 'react'
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';
import { NailContext } from '../../../../../Context/ProductContext';

const FacesMap = () => {
  const { isLoading, Faces } = useContext(NailContext);
    // console.log(Faces);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Faces.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default FacesMap
