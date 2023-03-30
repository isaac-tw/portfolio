import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Unstable_Grid2";
import LazyLoad from "react-lazyload";
import { useInViewport } from "react-in-viewport";
import { fadeTransitionProps } from "../utils/constants";
import { getWidthAndHeight } from "../utils/utils";

interface Item {
  file: string;
  format: string;
  dimensions?: string;
  keyWord?: string;
  src?: string;
}

const renderDetail = (id: string, item: Item, width: number, height: number) => {
  switch (item.format) {
    case "quote":
      return (
        <div className="detail-block__quote rfs-quote" style={{ height }}>
          {item.file}
        </div>
      );
    case "linkQuote":
      const keywordIndex = item.file.indexOf(item.keyWord || "");
      if (keywordIndex === -1) return null;
      return (
        <div className="detail-block__link-quote rfs-quote" style={{ height }}>
          <span>
            {item.file.substring(0, keywordIndex)}
          </span>
          &nbsp;
          <a
            className="detail-block__link-quote--link"
            href={item.src}
            target="_blank"
            rel="noreferrer noopener"
          >
            {item.keyWord}
          </a>
        </div>
      );
    case "jpg":
    case "png":
    case "gif":
      return (
        <img
          className="detail-block__img"
          src={require(`../assets/${id}/details/${id}_${item.file}_IsaacHuang.${item.format}`)}
          alt={item.file}
          width={width}
          height={height}
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
        {...fadeTransitionProps}
        in={inViewport || !isScrollingDown}
        ref={containerRef}
      >
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              {detail.map((item) => {
                const { width, height } = getWidthAndHeight(clientWidth, item.dimensions);
                return (
                  <Grid
                    mobileOld={12}
                    mobile={12}
                    laptop={12 / detail.length}
                    key={item.file}
                  >
                    <LazyLoad height={height}>
                      {renderDetail(id, item, width, height)}
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
