import React from 'react';
import ImageGalleryStyle from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
    return (
        <div className={ImageGalleryStyle.gallery}>
            {images.map((image) => (
                <div key={image.src} className={ImageGalleryStyle.galleryItem}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;

