const tabs: string[] = ['Work', 'Misc', 'About', 'Contact'];

export default function NavBar() {
    const renderIcon = () => (
        <div className='icon'>
            <div className='first-name'>Wei-Chun&nbsp;</div>
            <div className='last-name'>Huang</div>
        </div>
    );
    const renderTabs = () => (
        <div className='tabs'>
            {tabs.map((tab) => (
                <div className='elements' key={tab}>
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
            <div className='nav-bar rfs-main'>
                {renderIcon()}
                {renderTabs()}
            </div>
        </div>
    );
}
