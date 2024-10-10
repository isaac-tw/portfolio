import React, { useMemo, useRef } from 'react';
import { useParams, type LoaderFunctionArgs } from 'react-router-dom';
import { useScrollDirection } from 'react-use-scroll-direction';
import { isBrowser } from 'react-device-detect';
import { Gallery, Item } from 'react-photoswipe-gallery';

import DetailSection from './DetailSection';
import projects from '../data/projects.js';
import { getWidthAndHeight } from '../utils/utils';
import { type Projects } from '../interfaces';

export async function loader({ params }: LoaderFunctionArgs): Promise<Response | undefined> {
  const project = projects[params.projectId as keyof Projects];
  if (project !== undefined) {
    return new Response('', {
      status: 404,
      statusText: 'Not Found'
    });
  }
}

export default function InfoPage(): JSX.Element {
  const { projectId } = useParams();
  const {
    id,
    name,
    year,
    duration,
    // TODO: Make it optional -> fix ts error
    note,
    details
  } = projects[projectId as keyof Projects];
  const infoPageRef = useRef<HTMLHeadingElement>(null);
  const infoPageCapRef = useRef<HTMLHeadingElement>(null);
  const clientWidth = document.body.clientWidth;
  const { height: coverHeight, width: coverWidth } = getWidthAndHeight(clientWidth, '16x9');
  const { isScrollingDown } = useScrollDirection();

  const innerHeight = window.innerHeight;
  const infoPageOffsetTop = infoPageRef.current?.offsetTop ?? 0;
  const infoPageCapOffsetHeight = infoPageCapRef.current?.offsetHeight ?? 0;

  const coverStyle = useMemo(
    () =>
      innerHeight < infoPageOffsetTop + coverHeight + infoPageCapOffsetHeight
        ? {
          // 0.5 = innerHeight - 0.5 * innerHeight: make sure the caption shows till half of the innerHeight
          top: 0.5 * innerHeight - (coverHeight + infoPageCapOffsetHeight)
        }
        : {},
    [innerHeight, infoPageOffsetTop, coverHeight, infoPageCapOffsetHeight]
  );

  const infoPageCover = useMemo(() => {
    const frontImgSrc = new URL(`../assets/${id}/covers/${id}_cover-01_IsaacHuang.webp`, import.meta.url).href;
    let backImgSrc = new URL(`../assets/${id}/covers/${id}_cover-02_IsaacHuang.webp`, import.meta.url).href;

    if (backImgSrc.includes('undefined')) backImgSrc = frontImgSrc;

    return (
      <div className='info-page__cover' style={coverStyle}>
        <Gallery>
          <Item
            alt={`${id}_cover-front`}
            // For browsers, users see the back image when clicking on the area because of the hover effect (opacity: 0)
            // On the other hand, users see the front image on mobiles. So the srcs need to be adjusted here.
            original={isBrowser ? backImgSrc : frontImgSrc}
            thumbnail={isBrowser ? backImgSrc : frontImgSrc}
            width={coverWidth}
            height={coverHeight}
          >
            {({ ref, open }) => (
              <img
                className='hoverable-img--front'
                alt={`${id}_cover-front`}
                src={frontImgSrc}
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
          <Item
            alt={`${id}_cover-back`}
            original={isBrowser ? frontImgSrc : backImgSrc}
            thumbnail={isBrowser ? frontImgSrc : backImgSrc}
            width={coverWidth}
            height={coverHeight}
          >
            {({ ref }) => (
              <img
                className='hoverable-img'
                alt={`${id}_cover-back`}
                src={backImgSrc}
                ref={ref as React.MutableRefObject<HTMLImageElement>}
              />
            )}
          </Item>
        </Gallery>
        <div className='info-page__caption rfs-main' ref={infoPageCapRef}>
          {year}
          {duration !== '' ? <span> / {duration}</span> : null}
          {note !== undefined && note !== ''
            ? <div className='info-page__caption--note rfs-cap'>{note}</div>
            : null}
        </div>
      </div>
    );
  }, [id, coverStyle, name, note, year, duration]);

  return (
    <div className='info-page' ref={infoPageRef}>
      {infoPageCover}
      <div className='info-page__content'>
        {details.map((detail, index) => (
          <DetailSection
            clientWidth={clientWidth}
            detail={detail}
            id={id}
            isScrollingDown={isScrollingDown}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
