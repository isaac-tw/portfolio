import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ProjectCard from './ProjectCard'
import data from '../data/data.json'

export default function ProjectGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        rowSpacing={{
          mobileOld: 2.5,
          mobile: 4,
          tablet: 5,
          laptop: 7,
        }}
        columnSpacing={{
          mobileOld: 0,
          mobile: 2.5,
          tablet: 3.5,
          laptop: 4.5,
          desktop: 6,
        }}
      >
        {
          Object.entries(data).map(([key, value]) => (
            <Grid key={key} mobileOld={12} mobile={6} laptop={4}>
              <ProjectCard
                id={value.id}
                name={value.name}
                subtitle={value.subtitle}
                year={value.year}
                duration={value.duration}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
