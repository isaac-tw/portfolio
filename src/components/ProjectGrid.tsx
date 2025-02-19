import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import ProjectCard from './ProjectCard';
import {
  type Projects,
  type Misc
} from '../interfaces';

interface ProjectGridProps {
  projects: Projects | Misc;
}

export default function ProjectGrid({
  projects
}: ProjectGridProps) {
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
        {Object.values(projects).map((project) => (
          <Grid key={project.id} mobileOld={12} mobile={6} laptop={4}>
            <ProjectCard
              id={project.id}
              name={project.name}
              subtitle={project.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
