import React from "react";
import LazyLoad from "react-lazyload";
import DetailBlock from "./DetailBlock";
import { useScrollDirection } from "react-use-scroll-direction";
import { getMaxHeight } from "../utils/utils";

const project = {
  id: "luggageplus",
  name: "Luggage+",
  subtitle: "A Smart Travel App",
  year: 2019,
  duration: "3 weeks",
  imageRatio: "4:3",
  details: {
    "luggageplus_details-01_IsaacHuang": "jpg",
    "luggageplus_details-02_IsaacHuang": "jpg",
    "luggageplus_details-03_IsaacHuang": "jpg",
    "luggageplus_details-04_IsaacHuang": "jpg",
    "luggageplus_details-05_IsaacHuang": "jpg",
    "luggageplus_details-06_IsaacHuang": "jpg",
    "luggageplus_details-07_IsaacHuang": "jpg",
    "luggageplus_details-08_IsaacHuang": "jpg",
    "luggageplus_details-09_IsaacHuang": "jpg",
    "luggageplus_details-10_IsaacHuang": "jpg",
    "luggageplus_details-11_IsaacHuang": "jpg",
    "luggageplus_details-12_IsaacHuang": "jpg",
  },
};

export default function InfoPage() {
  const lazyLoadHeight = getMaxHeight(
    document.body.clientWidth,
    project.imageRatio
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
          {project.year} / {project.duration}
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
