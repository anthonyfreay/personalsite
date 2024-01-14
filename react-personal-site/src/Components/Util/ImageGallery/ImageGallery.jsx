import React from 'react';
import ImageGalleryStyle from './ImageGallery.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageGallery = ({ images }) => {
    return (
        <div className={ImageGalleryStyle.gallery}>
            {images.map((image) => (
                <div key={image.src} className={ImageGalleryStyle.galleryItem}>
                    <LazyLoadImage
                        src={image.src}
                        alt={image.alt}
                        effect="blur"
                        threshold={100}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
