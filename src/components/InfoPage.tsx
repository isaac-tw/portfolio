import React from "react";
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
  const project = projects[projectId as keyof Projects];
  const clientWidth = document.body.clientWidth;
  const { isScrollingDown } = useScrollDirection();

  return (
    <div className="info-page">
      <div className="info-page__cover">
        <img
          className="hoverable-img--front"
          src={require(`../assets/${project.id}/covers/${project.id}_cover-01_IsaacHuang.jpg`)}
          alt={`${project.name}`}
          width="1920px"
          height="1080px"
        />
        <img
          className="hoverable-img"
          src={require(`../assets/${project.id}/covers/${project.id}_cover-02_IsaacHuang.jpg`)}
          alt={`${project.name}`}
          width="1920px"
          height="1080px"
        />
        <div className="info-page__year-duration rfs-main">
          {project.year}
          {project.duration ? <span> / {project.duration}</span> : null}
        </div>
      </div>
      <div className="info-page__content">
        {project.details.map((detail, index) => (
          <DetailSection
            clientWidth={clientWidth}
            detail={detail}
            id={project.id}
            isScrollingDown={isScrollingDown}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
