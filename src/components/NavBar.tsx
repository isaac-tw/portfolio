import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    const renderIcon = () => (
        <Link to="/" className='icon'>
            <div className='first-name'>Wei-Chun&nbsp;</div>
            <div className='last-name'>Huang</div>
        </Link>
    );
    const renderTabs = () => (
        <div className='tabs'>
            <nav className="elements">
                <NavLink to="/">Work</NavLink><div className='divider'>/</div>
                <NavLink to="misc">Misc</NavLink><div className='divider'>/</div>
                <NavLink to="about">About</NavLink><div className='divider'>/</div>
                <span onClick={() => console.log('Contact')}>Contact</span>
            </nav>
        </div>
    );

    return (
        <div className='nav'>
            <div className='nav-bar rfs-main'>
                {renderIcon()}
                {renderTabs()}
            </div>
        </div>
    );
}
