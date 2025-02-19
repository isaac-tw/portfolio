import { createElement } from 'react';
import SingleImageGallery from './shared/SingleImageGallery';
import { type Item } from '../interfaces';

interface DetailProps {
  id: string;
  item: Item;
  width: number;
  height: number;
}

export default function Detail({
  id,
  item: {
    component,
    file,
    format,
    keyWord,
    src
  },
  width,
  height
}: DetailProps) {
  if (file === undefined) return null;

  switch (format) {
    case 'quote':
      return (
        <div className='detail-block__quote rfs-quote' style={{ height }}>
          {file}
        </div>
      );
    case 'linkQuote': {
      if (keyWord === undefined) return null;

      const keywordIndex = file.indexOf(keyWord);
      if (keywordIndex === -1) return null;
      return (
        <div className='detail-block__link-quote rfs-quote' style={{ height }}>
          <div>
            {file.substring(0, keywordIndex)}
            <a
              className='detail-block__link-quote--link'
              href={src}
              target='_blank'
              rel='noreferrer noopener'
            >
              {keyWord}
            </a>
          </div>
        </div>
      );
    }
    case 'webp':
      return (
        <SingleImageGallery
          className="detail-block__img"
          alt={file}
          src={new URL(`../assets/${id}/details/${id}_${file}_IsaacHuang.${format}`, import.meta.url).href}
          width={width}
          height={height}
        />
      );
    case 'vimeo':
      return (
        <>
          <div className='detail-block__vimeo'>
            <iframe
              className='detail-block__vimeo--iframe'
              src={src}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              title={file}
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
        </>
      );
    case 'component':
      return component !== undefined
        ? createElement(component)
        : null;
    default:
      return null;
  }
}
