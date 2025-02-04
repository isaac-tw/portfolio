import Grid from '@mui/material/Unstable_Grid2';
import SingleImageGallery from '../shared/SingleImageGallery';

export default function DeepSenseImgCollage(): JSX.Element {
  return (
    <Grid className='deepsense-img-collage' container>
      <Grid mobileOld={12} mobile={12} laptop={7.62}>
        <div className='deepsense-img-collage__left'>
          <SingleImageGallery
            className='detail-block__img'
            alt='details-04'
            src={new URL('../../assets/deepsense/details/deepsense_details-03_IsaacHuang.webp', import.meta.url).href}
            width={1920}
            height={1080}
          />
        </div>
      </Grid>
      <Grid mobileOld={12} mobile={12} laptop={4.38}>
        <div className='deepsense-img-collage__right'>
          <SingleImageGallery
            alt='details-06'
            src={new URL('../../assets/deepsense/details/deepsense_details-04_IsaacHuang.webp', import.meta.url).href}
            width={1080}
            height={1080}
          />
        </div>
      </Grid>
    </Grid>
  );
}
