import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import aboutData from '../data/about.json'

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
          Object.entries(aboutData).map(([key, value]) => (
            <Grid key={key} mobileOld={12} laptop={6}>
              { key === "Description" && (
                  <div>{value.toString()}</div>
                )
              }
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
