import OassistIntro from '../components/o-assist/OassistIntro';
import OassistImgCollage from '../components/o-assist/OassistImgCollage';

const details = [
  [
    {
      file: 'o-assist',
      format: 'vimeo',
      src: 'https://player.vimeo.com/video/435553215?h=c97ddeba14&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    }
  ],
  [
    {
      file: 'details-component',
      format: 'component',
      component: OassistIntro
    }
  ],
  [
    {
      dimensions: '1920x1080',
      file: 'details-01',
      format: 'jpg'
    }
  ],
  [
    {
      dimensions: '1080x1080',
      file: 'details-02',
      format: 'jpg'
    },
    {
      dimensions: '1080x1080',
      file: 'details-03',
      format: 'jpg'
    }
  ],
  [
    {
      // TODO: Remove file or replace component with it
      file: 'details-component',
      format: 'component',
      component: OassistImgCollage
    }
  ],
  [
    {
      dimensions: '1920x1080',
      file: 'details-07',
      format: 'jpg'
    }
  ],
  [
    {
      dimensions: '1920x1080',
      file: 'details-08',
      format: 'jpg'
    }
  ],
  [
    {
      dimensions: '1920x1080',
      file: 'details-09',
      format: 'jpg'
    }
  ]
];

const oAssist = {
  id: 'o-assist',
  name: 'o-assist',
  subtitle: 'Your Olfactory Assistant',
  year: 2020,
  duration: '16 Weeks',
  note: '(This project is run in the pandemic lockdown period)',
  details
};

export default oAssist;
