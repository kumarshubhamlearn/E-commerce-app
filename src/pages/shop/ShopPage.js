import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/CollectionsOverview';
import CollectionPage from '../../pages/collection-page/CollectionPage'

//match, location and history is passed down from app.js
const ShopPage = ({ match }) => {
  console.log('match', match.path);
  return (
    <div className='shop-page'>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      <Route exact path={match.path} component={CollectionsOverview}/>
    </div>
  );
};

export default ShopPage;
