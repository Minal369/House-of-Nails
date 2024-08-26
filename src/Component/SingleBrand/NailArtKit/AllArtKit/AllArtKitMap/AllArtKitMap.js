import React, { useContext } from 'react'
import { NailContext } from '../../../../../Context/ProductContext';
import AllItemsLayout from '../../../../AllItemsLayout/AllItemsLayout';

const AllArtKitMap = () => {
  const { isLoading, ArtKit } = useContext(NailContext);
  // console.log(ArtKit);

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      {ArtKit.map((mixedPD) => {
        return <AllItemsLayout key={mixedPD.id} {...mixedPD} />;
      })}
    </>
  );
}

export default AllArtKitMap
