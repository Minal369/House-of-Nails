import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const LettersMap = () => {
  const { isLoading, Letters } = useContext(NailContext);
  // console.log(Letters);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {Letters.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default LettersMap
