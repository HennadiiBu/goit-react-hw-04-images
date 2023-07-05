import React from 'react'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';

function ImageGallery({resultQuery,clickToItem,openFullScreenMode}) {
  return (
    <ul className={style.gallery}>
    <ImageGalleryItem
      resultQuery={resultQuery}
      // clickToItem={clickToItem}
      openFullScreenMode={openFullScreenMode}
    />
  </ul>
  )
}

export default ImageGallery
