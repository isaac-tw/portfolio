import React from "react";
import LazyLoad from "react-lazyload";
import DetailBlock from "./DetailBlock";
import projects from '../data/projects.json'
import { useParams } from 'react-router-dom';
import { useScrollDirection } from "react-use-scroll-direction";
import { getMaxHeight } from "../utils/utils";

interface Project {
  id: string,
  name: string,
  subtitle: string,
  year: number,
  duration: string,
  imageRatio: string,
  details: object,
}

interface Projects {
  luggageplus: Project,
  duplo: Project,
  "candle-chair": Project,
  magprint: Project,
}

export default function InfoPage() {
  const { projectId } = useParams();
  const project =  projects[projectId as keyof Projects];

  const lazyLoadHeight = getMaxHeight(
    document.body.clientWidth,
    project.imageRatio,
  );
  const { isScrollingDown } = useScrollDirection();

  return (
    <div className="info-page">
      <div className="info-page__cover">
        <LazyLoad>
          <img
            className="hoverable-img--front"
            src={require(`../assets/${project.id}/covers/${project.id}_cover-01_IsaacHuang.jpg`)}
            alt={`${project.name}`}
            width="1920px"
            height="1080px"
          />
        </LazyLoad>
        <LazyLoad>
          <img
            className="hoverable-img"
            src={require(`../assets/${project.id}/covers/${project.id}_cover-02_IsaacHuang.jpg`)}
            alt={`${project.name}`}
            width="1920px"
            height="1080px"
          />
        </LazyLoad>
        <div className="info-page__year-duration rfs-main">
          {project.year}
          {project.duration ? <span> / {project.duration}</span>  : null}
        </div>
      </div>
      <div className="info-page__content">
        {Object.entries(project.details).map(([key, value]) => (
          <DetailBlock
            imageName={key}
            isScrollingDown={isScrollingDown}
            key={key}
            lazyLoadHeight={lazyLoadHeight}
            url={require(`../assets/${project.id}/details/${key}.${value}`)}
          />
        ))}
      </div>
    </div>
  );
}
