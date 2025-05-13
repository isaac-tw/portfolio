import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

const externalLinks: Record<string, string> = {
  'a-cup-of-pc': 'https://www.instructables.com/A-Cup-of-PC/',
  'auto-unfollow': 'https://chromewebstore.google.com/detail/fapolehlmicanpbmkakjkmlbjdfhcmmf?utm_source=item-share-cb',
};

interface ProjectCardProps {
  id: string;
  name: string;
  subtitle: string;
}

export default function ProjectCard({
  id,
  name,
  subtitle
}: ProjectCardProps) {
  const frontImgSrc = new URL(`../assets/${id}/thumbnails/${id}_thumbnail-01_IsaacHuang.webp`, import.meta.url).href;
  let backImgSrc = new URL(`../assets/${id}/thumbnails/${id}_thumbnail-02_IsaacHuang.webp`, import.meta.url).href;

  if (backImgSrc.includes('undefined')) backImgSrc = frontImgSrc;

  // Although this might be a rare case,
  // LazyLoad can make <img /> with the same src into different assets
  const thumbnail = (
    <LazyLoad once offset={200}>
      <div>
        <img
          className='hoverable-img--front'
          src={frontImgSrc}
          alt={name}
          width='960px'
          height='540px'
        />
        <img
          className='hoverable-img'
          src={backImgSrc}
          alt={name}
          width='960px'
          height='540px'
        />
      </div>
    </LazyLoad>
  );

  return (
    <div className='project-card'>
      <div className='project-card__image-section'>
        {externalLinks[id] ? (
          <a href={externalLinks[id]} target='_blank' rel='noreferrer noopener'>
            {thumbnail}
          </a>
        ) : <Link to={`/work/${id}`}>{thumbnail}</Link>}
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
