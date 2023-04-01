import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useScrollDirection } from "react-use-scroll-direction";
import DetailSection from "./DetailSection";
import projects from "../data/projects.js";

interface Project {
  details: object;
  dimensions: string;
  duration: string;
  id: string;
  name: string;
  subtitle: string;
  year: number;
}

interface Projects {
  "candle-chair": Project;
  duplo: Project;
  luggageplus: Project;
  magprint: Project;
  "searching-ball": Project;
}

export async function loader({ params }: any) {
  const project = projects[params.projectId as keyof Projects];

  if (!project) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { project };
}

export default function InfoPage() {
  const { projectId } = useParams();
  const {
    id,
    name,
    year,
    duration,
    details,
  } = projects[projectId as keyof Projects];
  const clientWidth = document.body.clientWidth;
  const { isScrollingDown } = useScrollDirection();

  const infoPageCover = useMemo(
    () => (
      <div className="info-page__cover">
        <img
          className="hoverable-img--front"
          src={require(`../assets/${id}/covers/${id}_cover-01_IsaacHuang.jpg`)}
          alt={`${name}`}
          width="1920px"
          height="1080px"
        />
        <img
          className="hoverable-img"
          src={require(`../assets/${id}/covers/${id}_cover-02_IsaacHuang.jpg`)}
          alt={`${name}`}
          width="1920px"
          height="1080px"
        />
        <div className="info-page__year-duration rfs-main">
          {year}
          {duration ? <span> / {duration}</span> : null}
        </div>
      </div>
    ),
    [id, name, year, duration]
  );

  return (
    <div className="info-page">
      {infoPageCover}
      <div className="info-page__content">
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
