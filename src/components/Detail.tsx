import React from 'react';
import { type Item } from '../interfaces';

interface DetailProps {
  id: string;
  item: Item;
  width: number;
  height: number;
}

export default function Detail({
  id,
  item,
  width,
  height
}: DetailProps): JSX.Element | null {
  if (item.file === undefined) return null;

  switch (item.format) {
    case 'quote':
      return (
        <div className='detail-block__quote rfs-quote' style={{ height }}>
          {item.file}
        </div>
      );
    case 'linkQuote': {
      if (item.keyWord === undefined) return null;

      const keywordIndex = item.file.indexOf(item.keyWord);
      if (keywordIndex === -1) return null;
      return (
        <div className='detail-block__link-quote rfs-quote' style={{ height }}>
          <div>
            {item.file.substring(0, keywordIndex)}
            <a
              className='detail-block__link-quote--link'
              href={item.src}
              target='_blank'
              rel='noreferrer noopener'
            >
              {item.keyWord}
            </a>
          </div>
        </div>
      );
    }
    case 'jpg':
    case 'png':
    case 'gif':
      return (
        <img
          className='detail-block__img'
          src={require(`../assets/${id}/details/${id}_${item.file}_IsaacHuang.${item.format}`)}
          alt={item.file}
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
              src={item.src}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
              title={item.file}
            ></iframe>
          </div>
          <script src='https://player.vimeo.com/api/player.js'></script>
        </>
      );
    case 'component':
      return item.component !== undefined
        ? React.createElement(item.component)
        : null;
    default:
      return null;
  }
}
