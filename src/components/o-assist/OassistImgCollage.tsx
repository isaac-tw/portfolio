import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

export default function OassistImgCollage(): JSX.Element {
  return (
    <Grid className='oassist-img-collage' container>
      <Grid mobileOld={12} mobile={12} laptop={7}>
        <div className='oassist-img-collage__left'>
          <img
            className='detail-block__img'
            src={require('../../assets/o-assist/details/o-assist_details-04_IsaacHuang.jpg')}
            alt='details-04'
            width={1920}
            height={1080}
          />
          <img
            className='detail-block__img'
            src={require('../../assets/o-assist/details/o-assist_details-05_IsaacHuang.jpg')}
            alt='details-05'
            width={1920}
            height={1080}
          />
        </div>
      </Grid>
      <Grid mobileOld={12} mobile={12} laptop={4.7}>
        <div className='oassist-img-collage__right'>
          <img
            src={require('../../assets/o-assist/details/o-assist_details-06_IsaacHuang.gif')}
            alt='details-06'
            width={454}
            height={806}
          />
        </div>
      </Grid>
    </Grid>
  );
}
