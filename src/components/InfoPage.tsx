import React, { useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useScrollDirection } from "react-use-scroll-direction";
import DetailSection from "./DetailSection";
import projects from "../data/projects.js";
import { getWidthAndHeight } from "../utils/utils";

interface Project {
  details: object;
  dimensions: string;
  duration: string;
  id: string;
  name: string;
  note?: string;
  subtitle: string;
  year: number;
}

interface Projects {
  "candle-chair": Project;
  duplo: Project;
  deepsense: Project;
  luggageplus: Project;
  magprint: Project;
  "o-assist": Project;
  "remote-control-redesign": Project;
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
    // TODO: Make it optional -> fix ts error
    note,
    details,
  } = projects[projectId as keyof Projects];
  const infoPageRef = useRef<HTMLHeadingElement>(null);
  const infoPageCapRef = useRef<HTMLHeadingElement>(null);
  const clientWidth = document.body.clientWidth;
  const { height: coverHeight } = getWidthAndHeight(clientWidth, "16x9");
  const { isScrollingDown } = useScrollDirection();

  const innerHeight =  window.innerHeight;
  const infoPageOffsetTop =  infoPageRef.current?.offsetTop || 0;
  const infoPageCapOffsetHeight =  infoPageCapRef.current?.offsetHeight || 0;

  const coverStyle = useMemo(() => (innerHeight < infoPageOffsetTop + coverHeight + infoPageCapOffsetHeight) ? ({
    // 0.5 = innerHeight - 0.5 * innerHeight: make sure the caption shows till half of the innerHeight
    top: 0.5 * innerHeight - (coverHeight + infoPageCapOffsetHeight),
  }) : {}
  , [innerHeight, infoPageOffsetTop, coverHeight, infoPageCapOffsetHeight]);

  const infoPageCover = useMemo(
    () => {
      const frontImgSrc = require(`../assets/${id}/covers/${id}_cover-01_IsaacHuang.jpg`);
      let backImgSrc;
      try {
        backImgSrc = require(`../assets/${id}/covers/${id}_cover-02_IsaacHuang.jpg`);
      } catch(e) {}

      return (
        <div
          className="info-page__cover"
          style={coverStyle}
        >
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
          <div
            className="info-page__caption rfs-main"
            ref={infoPageCapRef}
          >
            {year}
            {duration ? <span> / {duration}</span> : null}
            {note ? <div className="info-page__caption--note rfs-cap">{note}</div> : null}
          </div>
        </div>
      );
    },
    [id, coverStyle, name, note, year, duration]
  );

  return (
    <div
      className="info-page"
      ref={infoPageRef}
    >
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
