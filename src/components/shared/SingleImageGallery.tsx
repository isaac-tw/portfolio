import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';

interface SingleImageGalleryProps {
  className?: string;
  alt: string;
  src: string;
  width: number;
  height: number;
}

export default function SingleImageGallery({
  className = '',
  alt,
  src,
  width,
  height
}: SingleImageGalleryProps): JSX.Element {
  return (
    <Gallery>
      <Item
        alt={alt}
        original={src}
        thumbnail={src}
        width={width}
        height={height}
      >
        {({ ref, open }) => (
          <img
            className={className}
            alt={alt}
            src={src}
            ref={ref as React.MutableRefObject<HTMLImageElement>}
            onClick={open}
          />
        )}
      </Item>
    </Gallery>
  );
}
