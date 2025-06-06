import Grid from '@mui/material/Unstable_Grid2';
import SingleImageGallery from '../shared/SingleImageGallery';

export default function OassistImgCollage() {
  return (
    <Grid className='oassist-img-collage' container>
      <Grid mobileOld={12} mobile={12} laptop={7}>
        <div className='oassist-img-collage__left'>
          <SingleImageGallery
            className='detail-block__img'
            alt='details-04'
            src={new URL('../../assets/o-assist/details/o-assist_details-04_IsaacHuang.webp', import.meta.url).href}
            width={1920}
            height={1080}
          />
          <SingleImageGallery
            className='detail-block__img'
            alt='details-05'
            src={new URL('../../assets/o-assist/details/o-assist_details-05_IsaacHuang.webp', import.meta.url).href}
            width={1920}
            height={1080}
          />
        </div>
      </Grid>
      <Grid mobileOld={12} mobile={12} laptop={4.7}>
        <div className='oassist-img-collage__right'>
          <SingleImageGallery
            alt='details-06'
            src={new URL('../../assets/o-assist/details/o-assist_details-06_IsaacHuang.webp', import.meta.url).href}
            width={454}
            height={806}
          />
        </div>
      </Grid>
    </Grid>
  );
}
