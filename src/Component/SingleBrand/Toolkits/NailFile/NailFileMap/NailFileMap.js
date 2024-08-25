import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const NailFileMap = () => {
  const { isLoading, NailFile } = useContext(NailContext);
  // console.log(NailFile);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {NailFile.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default NailFileMap
