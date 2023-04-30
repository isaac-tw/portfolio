import React from 'react';
import {
  type Education,
  type Experience,
  type Activity,
  type Skill,
  type About
} from '../interfaces';

interface AboutItemProps {
  infoKey: keyof About;
  info: About[keyof About];
}

export default function AboutItem({
  infoKey,
  info
}: AboutItemProps): JSX.Element | null {
  switch (infoKey) {
    case 'Description':
      return (
        <div className='info-items'>
          <div className='info-items__description rfs-main'>{info.toString()}</div>
        </div>
      );
    case 'Education':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item, index) => (
            <div className='info-items' key={index}>
              <div className='info-items__title rfs-main'>{(item as Education).Degree}</div>
              <div className='info-items__subtitle rfs-main'>{(item as Education).School}</div>
              <div className='info-items__caption rfs-cap'>{(item as Education).Duration}</div>
              <div className='info-items__caption rfs-cap'>{(item as Education).Additional}</div>
            </div>
          ))}
        </>
      );
    case 'Experience':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item, index) => (
            <div className='info-items' key={index}>
              <div className='info-items__title rfs-main'>{(item as Experience).Title}</div>
              <div className='info-items__subtitle rfs-main'>{(item as Experience)['Company name']}</div>
              <div className='info-items__caption rfs-cap'>{(item as Experience).Duration}</div>
              <div className='info-items__caption rfs-cap'>{(item as Experience).Additional}</div>
            </div>
          ))}
        </>
      );
    case 'Activity':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item, index) => (
            <div className='info-items' key={index}>
              <div className='info-items__title rfs-main'>{(item as Activity).Name}</div>
              <div className='info-items__subtitle rfs-main'>{(item as Activity).Organization}</div>
              <div className='info-items__caption rfs-cap'>{(item as Activity).Duration}</div>
            </div>
          ))}
        </>
      );
    case 'Skill':
      return (
        <>
          <div className='info-title rfs-main'>{infoKey}</div>
          {info.map((item, index) => (
            <div className='info-items' key={index}>
              <div className='info-items__title rfs-main'>{Object.keys(item as Skill)[0]}</div>
              <div className='info-items__subtitle rfs-main'>{Object.values(item as Skill)[0]}</div>
            </div>
          ))}
        </>
      );
    default:
      return null;
  }
}
