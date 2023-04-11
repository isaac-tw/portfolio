import React, { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import { ReducerContext } from "../App"
import ContactForm from "./ContactForm"

export default function NavBar() {
    const { dispatch }  = useContext(ReducerContext);
  
    const handleClickOpen = () => {
        dispatch({
          type: 'SHOW_DIALOG',
          payload: {
            title: "HELLO WORLD",
            bodyComponent: ContactForm,
          },
        });
    };

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
                <a
                    href="https://www.instructables.com/A-Cup-of-PC/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Misc
                </a><div className='divider'>/</div>
                <NavLink to="about">About</NavLink><div className='divider'>/</div>
                <span onClick={handleClickOpen}>Contact</span>
                {/* <a href="mailto:isaac.huang.tw@gmail.com">Contact</a> */}
            </nav>
        </div>
    );

    return (
        <div className='nav'>
            <div className='nav__bar rfs-main'>
                {renderIcon()}
                {renderTabs()}
            </div>
        </div>
    );
}
