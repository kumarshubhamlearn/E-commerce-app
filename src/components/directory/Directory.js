import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/MenuItem';

import './Directory.scss';

const Directory = ({sections}) => {
  const render = sections.map(
    ({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    )
  );

  return <div className='directory-menu'>{render}</div>;
};

const mapStateToProps = ({directory}) => ({
  sections: directory.sections
})

export default connect(mapStateToProps)(Directory);
