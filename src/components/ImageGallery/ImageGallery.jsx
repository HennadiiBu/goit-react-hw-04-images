import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={style.gallery}>
        <ImageGalleryItem
          resultQuery={this.props.resultQuery}
          clickToItem={this.props.clickToItem}
          openFullScreenMode={this.props.openFullScreenMode}
        />
      </ul>
    );
  }
}
