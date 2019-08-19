import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  const render = items
    .filter((item, idx) => idx < 4)
    .map(({id, name, price, imageUrl}) => (
        <CollectionItem 
          name={name} 
          price={price}
          id={id}
          key={id}
          imageUrl={imageUrl}
        />
    ));

  return (
    <div className='collection-preview'>
      <h1>{title.toUpperCase()}</h1>
      <div className='preview'>{render}</div>
    </div>
  );
};

export default CollectionPreview;
