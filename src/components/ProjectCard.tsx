import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  name,
  subtitle,
  year,
  duration,
}: {
  id: string,
  name: string,
  subtitle: string,
  year: number,
  duration: string,
}) {
  return (
    <div className="project-card">
      <div className="project-card__image-section">
        <Link to={id}>
          <LazyLoad>
            <img
              className="hoverable-img--front"
              src={require(`../assets/${id}/thumbnails/${id}_thumbnail-01_IsaacHuang.jpg`)}
              alt={`${name}`}
              width="1920px"
              height="1080px"
            />
          </LazyLoad>
          <LazyLoad>
            <img
              className="hoverable-img"
              src={require(`../assets/${id}/thumbnails/${id}_thumbnail-02_IsaacHuang.jpg`)}
              alt={`${name}`}
              width="1920px"
              height="1080px"
            />
          </LazyLoad>
        </Link>
      </div>
      <div className="project-card__title rfs-main">{name}</div>
      <div className="project-card__subtitle rfs-sub">{subtitle}</div>
    </div>
  );
}
