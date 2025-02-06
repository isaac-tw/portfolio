import { EMAIL_ADDRESS } from "../../utils/constants";

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
          src={new URL('../../assets/misc/profile_IsaacHuang.webp', import.meta.url).href}
          alt='profile_IsaacHuang'
        />
      </div>
      <div className='under-construction__inquiries'>
        Please feel free to contact me for any inquiries:
        <br />
        <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
      </div>
    </div>
  );
}
