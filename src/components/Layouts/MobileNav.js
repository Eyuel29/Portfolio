import { NavLink } from "react-router-dom";
import SlideY from "../utils/SlideY";

const MobileNav = (props) =>{

    const menuHandler = props.menuHandler;
    const menuState = props.menuState;

    const navLinkClicked = () =>{
        window.scrollTo(0, 0);
        menuHandler(!menuState);
    }

    return(
        <SlideY
        delay={100}
        y1={-500}
        y2={0}
        opacity1={1}
        opacity2={1} >
            <div className='nav-dropdown'>
                <ul className='mobile-nav-options'>
                    <NavLink onClick={navLinkClicked} className={'nav-link'} to={'/about'}    ><li>About   </li></NavLink>
                    <NavLink onClick={navLinkClicked} className={'nav-link'} to={'/projects'} ><li>Projects</li></NavLink>
                    <NavLink onClick={navLinkClicked} className={'nav-link'} to={'/skills'}   ><li>Skills  </li></NavLink>
                    <NavLink onClick={navLinkClicked} className={'nav-link'} to={'/contact'}  ><li>Contact </li></NavLink>
                </ul>
            </div>
            </SlideY>
    );
}

export default MobileNav;