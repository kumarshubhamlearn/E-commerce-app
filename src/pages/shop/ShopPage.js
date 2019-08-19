import React, { Component } from 'react'
import shopData from './shopData';

import CollectionPreview from '../../components/preview-collection/CollectionPreview';

class ShopPage extends Component {
  state = {
    collections: shopData
  }
  render() {
    const {collections} = this.state;

    const render = collections.map(({id,...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
    return (
      <div>
        {render}
      </div>
    );
  }
}

export default ShopPage;