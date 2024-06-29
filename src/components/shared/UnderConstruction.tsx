import React from 'react';

interface UnderConstructionProps {
  subject: string;
}

export default function UnderConstruction({
  subject = 'Content'
}: UnderConstructionProps): JSX.Element {
  return (
    <div className='under-construction'>
      <div className='under-construction__content'>
        <div className='under-construction__message'>
          <div className='under-construction__word--subject'>{subject}</div>
          <div className='under-construction__word--under-construction'>
            Under
            <br />
            Construction
          </div>
        </div>
        <img
          className='under-construction__img'
          src={require('../../assets/misc/profile_IsaacHuang.webp')}
          alt='profile_IsaacHuang'
        />
      </div>
      <div className='under-construction__inquiries'>
        Please feel free to contact me for any inquiries:
        <br />
        <a href='mailto:isaac.huang.tw@gmail.com'>isaac.huang.tw@gmail.com</a>
      </div>
    </div>
  );
}
