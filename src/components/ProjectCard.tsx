import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

export default function ProjectCard({
  id,
  name,
  subtitle,
}: {
  id: string,
  name: string,
  subtitle: string,
}) {
  const frontImgSrc = require(`../assets/${id}/thumbnails/${id}_thumbnail-01_IsaacHuang.jpg`);
  let backImgSrc;
  try {
    backImgSrc = require(`../assets/${id}/thumbnails/${id}_thumbnail-02_IsaacHuang.jpg`);
  } catch(e) {}

  return (
    <div className="project-card">
      <div className="project-card__image-section">
        <Link to={`/work/${id}`}>
          {/* Although this might be a rare case, */}
          {/* LazyLoad can make <img /> with the same src into different assets */}
          <LazyLoad once>
            <div>
              <img
                className="hoverable-img--front"
                src={frontImgSrc}
                alt={`${name}`}
                width="1920px"
                height="1080px"
              />
              <img
                className="hoverable-img"
                src={backImgSrc || frontImgSrc}
                alt={`${name}`}
                width="1920px"
                height="1080px"
              />
            </div>
          </LazyLoad>
        </Link>
      </div>
      <Tooltip title={name}>
        <div className="project-card__title rfs-main">
          {name}
          </div>
      </Tooltip>
      <Tooltip title={subtitle}>
        <div className="project-card__subtitle rfs-sub">
          {subtitle}
        </div>
      </Tooltip>
    </div>
  );
}
