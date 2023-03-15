import React, { useRef } from "react";
import Fade from "@mui/material/Fade";
import LazyLoad from "react-lazyload";
import { useInViewport } from "react-in-viewport";
import { transitionEasing } from "../utils/constants";

export default function DetailBlock({
  imageName,
  isScrollingDown,
  lazyLoadHeight,
  url,
}: {
  imageName: string;
  isScrollingDown: boolean;
  lazyLoadHeight: number;
  url: string;
}) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { inViewport } = useInViewport(containerRef);

  return (
    <Fade
      in={inViewport || !isScrollingDown}
      easing={transitionEasing}
      ref={containerRef}
    >
      <div>
        <LazyLoad height={lazyLoadHeight}>
          <img
            src={url}
            alt={imageName}
            width="1920px"
            height="1080px"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </LazyLoad>
      </div>
    </Fade>
  );
}
