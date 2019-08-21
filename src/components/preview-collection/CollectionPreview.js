import React from 'react';

import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  const render = items
    .filter((item, idx) => idx < 4)
    .map((item) => (
        <CollectionItem 
          key={item.id}
          item={item}
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
