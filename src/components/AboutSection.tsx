import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import AboutItem from './AboutItem';
import about from '../data/about.json';

export default function AboutSection(): JSX.Element {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        rowSpacing={{
          mobileOld: 2.5,
          mobile: 4,
          tablet: 5,
          laptop: 7
        }}
        columnSpacing={{
          mobileOld: 0,
          mobile: 2.5,
          tablet: 3.5,
          laptop: 4.5,
          desktop: 6
        }}
      >
        {(Object.keys(about) as Array<keyof typeof about>).map((infoKey) => (
          <Grid key={infoKey} mobileOld={12} laptop={6}>
            <AboutItem
              infoKey={infoKey}
              info={about[infoKey]}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
