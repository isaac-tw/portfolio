import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

interface ProjectCardProps {
  id: string;
  name: string;
  subtitle: string;
}

export default function ProjectCard({
  id,
  name,
  subtitle
}: ProjectCardProps): JSX.Element {
  let frontImgSrc = '';
  let backImgSrc = '';
  try {
    frontImgSrc = require(`../assets/${id}/thumbnails/${id}_thumbnail-01_IsaacHuang.jpg`);
    backImgSrc = require(`../assets/${id}/thumbnails/${id}_thumbnail-02_IsaacHuang.jpg`);
  } catch (e) {}

  if (backImgSrc === '') backImgSrc = frontImgSrc;

  // Although this might be a rare case,
  // LazyLoad can make <img /> with the same src into different assets
  const thumbnail = (
    <LazyLoad once offset={200}>
      <div>
        <img
          className='hoverable-img--front'
          src={frontImgSrc}
          alt={`${name}`}
          width='1920px'
          height='1080px'
        />
        <img
          className='hoverable-img'
          src={backImgSrc}
          alt={`${name}`}
          width='1920px'
          height='1080px'
        />
      </div>
    </LazyLoad>
  );

  return (
    <div className='project-card'>
      <div className='project-card__image-section'>
        {/* TODO: Update condition for other external links */}
        {(id !== 'a-cup-of-pc')
          ? <Link to={`/work/${id}`}>{thumbnail}</Link>
          : (
            <a
              href='https://www.instructables.com/A-Cup-of-PC/'
              target='_blank'
              rel='noreferrer noopener'
            >
              {thumbnail}
            </a>
          )}
      </div>
      <Tooltip title={name}>
        <div className='project-card__title rfs-main'>{name}</div>
      </Tooltip>
      <Tooltip title={subtitle}>
        <div className='project-card__subtitle rfs-sub'>{subtitle}</div>
      </Tooltip>
    </div>
  );
}
