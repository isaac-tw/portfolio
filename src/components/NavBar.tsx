import { Link, NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Email, GitHub } from '@mui/icons-material';

const gitHubLink = 'https://github.com/isaac-tw';
const mailtoLink = 'mailto:isaac.huang.tw@gmail.com';

const NameArea = () => (
  <div className='navbar__name'>
    <Link to='/' className='navbar__full-name'>
      <div className='navbar__first-name'>
        <span>Wei-Chun&nbsp;</span>
      </div>
      <div className='navbar__last-name'>Huang</div>
    </Link>
    <div className='navbar__icon-buttons'>
      <IconButton
        aria-label='GitHub'
        href={gitHubLink}
        rel='noreferrer noopener'
        target='_blank'
      >
        <GitHub fontSize='large' />
      </IconButton>
      <IconButton aria-label='Email' href={mailtoLink}>
        <Email fontSize='large' />
      </IconButton>
    </div>
  </div>
);

const TabsArea = () => (
  <div className='navbar__tabs'>
    <nav className='navbar__tab-list'>
      <NavLink to='/'>Work</NavLink>
      <div className='navbar__tab-divider'>/</div>
      <NavLink to='misc'>misc.</NavLink>
      <div className='navbar__tab-divider'>/</div>
      <NavLink to='about'>About</NavLink>

      <div className='navbar__tab-divider navbar__tab-divider--responsive'>/</div>
      <Link
        aria-label='GitHub'
        className='navbar__tab-link'
        to={gitHubLink}
        rel='noreferrer noopener'
        target='_blank'
      >
        GitHub
      </Link>
      <div className='navbar__tab-divider navbar__tab-divider--responsive'>/</div>
      <Link className='navbar__tab-link' to={mailtoLink}>
        Contact
      </Link>
    </nav>
  </div>
);

export default function NavBar() {
  return (
    <header className='navbar'>
      <div className='navbar__container rfs-main'>
        <NameArea />
        <TabsArea />
      </div>
    </header>
  );
}
