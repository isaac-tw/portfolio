import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Unstable_Grid2";
import LazyLoad from "react-lazyload";
import { useInViewport } from "react-in-viewport";
import { transitionEasing } from "../utils/constants";
import { getWidthAndHeight } from "../utils/utils";

interface Item {
  file: string;
  format: string;
  dimensions?: string;
  src?: string;
}

const renderDetail = (id: string, item: Item, clientWidth: number) => {
  switch (item.format) {
    case "jpg":
    case "png":
    case "gif":
      return (
        <img
          {...getWidthAndHeight(clientWidth, item.dimensions)}
          className="detail-block__img"
          src={require(`../assets/${id}/details/${id}_${item.file}_IsaacHuang.${item.format}`)}
          alt={item.file}
        />
      );
    case "vimeo":
      return (
        <>
          <div className="detail-block__vimeo">
            <iframe
              className="detail-block__vimeo--iframe"
              src={item.src}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={item.file}
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </>
      );
    default:
      return null;
  }
};

export default function DetailSection({
  clientWidth,
  detail,
  id,
  isScrollingDown,
}: {
  clientWidth: number;
  detail: Array<Item>;
  id: string;
  isScrollingDown: boolean;
}) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { inViewport } = useInViewport(containerRef);

  return (
    <div className="detail-block">
      <Fade
        in={inViewport || !isScrollingDown}
        easing={transitionEasing}
        ref={containerRef}
      >
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              {detail.map((item) => {
                return (
                  <Grid
                    mobileOld={12}
                    mobile={12}
                    laptop={12 / detail.length}
                    key={item.file}
                  >
                    <LazyLoad height={getWidthAndHeight(clientWidth, item.dimensions).height}>
                      {renderDetail(id, item, clientWidth)}
                    </LazyLoad>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      </Fade>
    </div>
  );
}
