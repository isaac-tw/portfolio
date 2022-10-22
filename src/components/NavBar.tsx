const tabs: string[] = ['Work', 'UX', 'Misc', 'About', 'Contact'];

export default function NavBar() {
    const renderIcon = () => (
        <div className='icon'>
            Wei-Chun Huang
        </div>
    );
    const renderTabs = () => (
        <div className='tab-section'>
            {tabs.map((tab) => (
                <div className='tabs'>
                    <div className='tab'>
                        {tab}
                    </div>
                    {tab !== tabs.at(-1) && <div className='divider'>/</div>}
                </div>
            ))}
        </div>
    );

    return (
        <div className='nav'>
            <div className='nav-bar'>
                {renderIcon()}
                {renderTabs()}
            </div>
        </div>
    );
}
