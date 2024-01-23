import "../../assets/css/Footer.css";
import {GrGithub, GrInstagram, GrLinkedin, GrTwitter} from 'react-icons/gr';

const Footer = () =>{
    return (
            <div className="footer">
                <p>&copy; 2024 Eyuel Dejene</p>
                <div className="socials">
                    <ul className="socials-links">
                        <li><a target="blank" href="https://www.github.com/eyuel29" > <GrGithub /></a></li>
                        <li><a target="blank" href="https://www.instagram.com/eyuel29" > <GrInstagram /></a></li>
                        <li><a target="blank" href="https://www.twitter.com/eyuel_d" > <GrLinkedin /></a></li>
                        <li><a target="blank" href="https://www.twitter.com/eyuel_d" > <GrTwitter /></a></li>
                    </ul>
                </div>
            </div>
    );
}

export default Footer;