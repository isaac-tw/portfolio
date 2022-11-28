import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import about from '../data/about.json'

interface Education {
  Degree: string;
  School: string;
  Duration: string;
  Additional?: string;
}
interface Experience {
  Title: string;
  'Company name': string;
  Duration: string;
  Additional?: string;
}
interface Activity {
  Name: string;
  Organization?: string;
  Duration: string;
  Additional?: string;
}
interface Skill {
  Language?: string;
  '3D Modeling'?: string;
  Adobe?: string;
  Programming?: string;
  Other?: string;
}

interface About {
  Description: string;
  Education: Education[];
  Experience: Experience[];
  Activity: Activity[];
  Skill: Skill[];
}

const aboutData: About = about;

export default function AboutGrid() {
  function renderAbout(key: string, value: any) {
    switch(key) {
      case 'Description':
        return (
          <div className="about">
            <div className="description rfs-main">
              {value.toString()}
            </div>
          </div>
        );
      case 'Education':
        return (value.map((element: Education, index: number) => (
          <div className="about" key={index}>
            <div className="title rfs-main">{element['Degree']}</div>
            <div className="subtitle rfs-main">{element['School']}</div>
            <div className="caption rfs-cap">{element['Duration']}</div>
            <div className="caption rfs-cap">{element['Additional']}</div>
          </div>
        )));
      case 'Experience':
        return (value.map((element: Experience, index: number) => (
          <div className="about" key={index}>
            <div className="title rfs-main">{element['Title']}</div>
            <div className="subtitle rfs-main">{element['Company name']}</div>
            <div className="caption rfs-cap">{element['Duration']}</div>
            <div className="caption rfs-cap">{element['Additional']}</div>
          </div>
        )));
      case 'Activity':
        return (value.map((element: Activity, index: number) => (
          <div className="about" key={index}>
            <div className="title rfs-main">{element['Name']}</div>
            <div className="subtitle rfs-main">{element['Organization']}</div>
            <div className="caption rfs-cap">{element['Duration']}</div>
          </div>
        )));
      case 'Skill':
        return (value.map((element: Skill, index: number) => (
          <div className="about" key={index}>
            <div className="title rfs-main">{Object.keys(element)[0]}</div>
            <div className="subtitle rfs-main">{Object.values(element)[0]}</div>
          </div>
        )));
    }
  }

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
              {renderAbout(key, value)}
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}
