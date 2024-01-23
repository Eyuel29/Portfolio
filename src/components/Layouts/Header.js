import { useState } from "react";
import { NavLink } from "react-router-dom";
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';
import {FiArrowUp, FiMenu } from 'react-icons/fi';
import '../../assets/css/Header.css';
import MobileNav from "./MobileNav";


const Header = (props) =>{

    const [mobileMenu, setMobileMenu] = useState(false);
    
    const toggleMenu = () =>{
        setMobileMenu(!mobileMenu);

    }
    

    return (
        <>
        <div className='navbar-top' id='navbar-top'>
            <div className='nav-title'>
                <h1 className='title'>Joel</h1>
            </div>  

            <div className='nav-board'>
                <div className='nav-utils-section'>
                    {props.theme === "dark" ? 
                    <span><BsFillSunFill onClick={props.themeHandler} className='rotating-nav-icon icon-sun' /></span> : 
                    <span><BsFillMoonFill onClick={props.themeHandler} className='rotating-nav-icon icon-moon' /></span>
                    }
                </div>

                <div className='nav-options-section'>
                    <ul className='nav-options'>
                       <NavLink className={'nav-link'} to={'/about'}    ><li>About   </li></NavLink>
                       <NavLink className={'nav-link'} to={'/projects'} ><li>Projects</li></NavLink>
                       <NavLink className={'nav-link'} to={'/skills'}   ><li>Skills  </li></NavLink>
                       <NavLink className={'nav-link'} to={'/contact'}  ><li>Contact </li></NavLink>
                    </ul>
                </div>

                <div className='nav-utils-section'>
                    { mobileMenu === false ? <span><FiMenu className="nav-icon mobile-menu-btn" onClick={toggleMenu}/></span> : 
                    <span><FiArrowUp className="nav-icon mobile-menu-btn" onClick={toggleMenu}/></span> }
                </div>
            
            </div>
        </div>
        {mobileMenu === true ? <MobileNav className="mobile-navbar"/> : null}
        </>
    );
}

export default Header;