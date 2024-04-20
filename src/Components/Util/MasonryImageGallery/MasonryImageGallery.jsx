import React, { useState, useCallback, memo } from 'react';
import Masonry from 'react-masonry-css'; // Import the library
import MasonryImageGalleryStyle from './MasonryImageGallery.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const MasonryImageGallery = memo(({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(0);

    const openLightbox = useCallback((index) => {
        setActiveImage(index);
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
    }, []);

    // Map images to include HD source
    const lightboxImages = images.map(image => ({
        ...image,
        src: image.hdSrc
    }));

    // Define the breakpoints and corresponding number of columns
    const breakpointColumnsObj = {
        default: 5,
        1100: 4,
        900: 3,
        490: 2
    };

    return (
        <div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={MasonryImageGalleryStyle.gallery}
                columnClassName={MasonryImageGalleryStyle.galleryItem}>
                {images.map((image, index) => {
                    return (
                        <div key={image.src} onClick={() => openLightbox(index)}>
                            <LazyLoadImage
                                src={image.src}
                                alt={image.alt}
                                effect="blur"
                                threshold={10}
                            />
                        </div>
                    );
                })}
            </Masonry>

            {lightboxOpen && (
                <LightboxComponent
                    images={lightboxImages}
                    open={lightboxOpen}
                    activeImage={activeImage}
                    onClose={closeLightbox}
                    animation={{ fade: 0 }}
                />
            )}
        </div>
    );
});

const LightboxComponent = ({ images, open, activeImage, onClose }) => {
    return (
        <div className={MasonryImageGalleryStyle.lightboxContainer}>
            <Lightbox
                slides={images}
                open={open}
                index={activeImage}
                controller={{ closeOnBackdropClick: true }}
                close={onClose}
                className={MasonryImageGalleryStyle.lightbox}
                animation={{ swipe: 0 }}
            />
        </div>
    );
};

export default MasonryImageGallery;