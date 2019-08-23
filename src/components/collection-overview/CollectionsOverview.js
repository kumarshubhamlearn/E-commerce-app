import React from 'react';
import { connect } from 'react-redux';

import {selectCollectionsForPreview} from '../../redux/selectors';

import CollectionPreview from '../preview-collection/CollectionPreview';
import './CollectionsOverview.scss';

const CollectionsOverview = ({collections}) => {
  const render = collections.map(({ id, ...otherCollectionProps }) => (
    <CollectionPreview key={id} {...otherCollectionProps} />
  ));

  return <div className='collection-overview'>{render}</div>;
};

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
