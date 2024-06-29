import DeepSenseIntro from '../components/deepsense/DeepSenseIntro';
import DeepSenseImgCollage from '../components/deepsense/DeepSenseImgCollage';
import UnderConstruction from '../components/shared/UnderConstruction';

const details = [
  [
    {
      file: 'details-component',
      format: 'component',
      component: DeepSenseIntro
    },
    {
      format: 'placeholder'
    }
  ],
  [
    {
      file: 'o-assist',
      format: 'vimeo',
      src: 'https://player.vimeo.com/video/430292748?h=b93016ee5c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
    }
  ],
  [
    {
      dimensions: '2560x914',
      file: 'details-01',
      format: 'webp'
    }
  ],
  [
    {
      dimensions: '1920x1080',
      file: 'details-02',
      format: 'webp'
    }
  ],
  [
    {
      file: 'details-component',
      format: 'component',
      component: UnderConstruction
    }
  ],
  [
    {
      file: 'details-component',
      format: 'component',
      component: DeepSenseImgCollage
    }
  ]
];

const deepSense = {
  id: 'deepsense',
  name: 'DeepSense',
  subtitle: 'An alternative for Yield Estimation',
  year: 2020,
  duration: '12 Weeks',
  note: '',
  details
};

export default deepSense;
