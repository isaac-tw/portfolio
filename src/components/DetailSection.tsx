import { useMemo, useRef } from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Unstable_Grid2';
import LazyLoad from 'react-lazyload';
import { useInViewport } from 'react-in-viewport';
import Detail from './Detail';
import { fadeTransitionProps } from '../utils/constants';
import { getWidthAndHeight } from '../utils/utils';
import { type Item } from '../interfaces';

interface DetailSectionProps {
  clientWidth: number;
  detail: Item[];
  id: string;
  isScrollingDown: boolean;
}

export default function DetailSection({
  clientWidth,
  detail,
  id,
  isScrollingDown
}: DetailSectionProps): JSX.Element {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { inViewport } = useInViewport(containerRef);

  const fadeContent = useMemo(
    () => (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            rowSpacing={{
              mobileOld: 2,
              mobile: 2,
              tablet: 2,
              laptop: 0
            }}
            columnSpacing={{
              mobileOld: 0,
              mobile: 0,
              tablet: 0,
              laptop: 2
            }}
          >
            {detail.map((item, index) => {
              const { width, height } = getWidthAndHeight(
                clientWidth,
                item.dimensions
              );
              return (
                <Grid
                  mobileOld={12}
                  mobile={12}
                  laptop={12 / detail.length}
                  key={index}
                >
                  {/* The layout is a block after a block, so setting offset = height usually means
                  a long as a block is visible in viewport, we start loading the next image */}
                  <LazyLoad height={height} once offset={height} resize>
                    <Detail
                      id={id}
                      item={item}
                      width={width}
                      height={height}
                    />
                  </LazyLoad>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    ),
    [clientWidth, detail, id]
  );

  return (
    <div className='detail-block'>
      <Fade
        {...fadeTransitionProps}
        in={inViewport || !isScrollingDown}
        ref={containerRef}
      >
        {fadeContent}
      </Fade>
    </div>
  );
}
