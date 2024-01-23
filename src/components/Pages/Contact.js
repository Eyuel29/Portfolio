import "../../assets/css/Base.css";
import "../../assets/css/Contacts.css";
import { GrLinkedin, GrTwitter, GrGithub, GrInstagram } from "react-icons/gr";
import SlideY from "../utils/SlideY";

const Contact = () =>{

    return (
        <SlideY delay={400}>
        <div className="contact">
          <h1 className="contact-title">Contact</h1>
            <form className="contact-form" action="/contacts" method="POST" required>
            <input className="input input-text" type="email" placeholder="...@example.com" required/>
            <textarea className="input input-text"placeholder="Message" rows={"8"}/>
            <input className="input input-button" type="submit"/>
            </form>
            <div className="contact-info">
            <ul>
                <li>Tel +251968658459</li>
                <li>Mail dejenejoel@gmail.com </li>
                <li>Address A.A, Ethiopia</li>
                <li>Street Bethel, A.A</li>
                <li>Po-box 345212</li>
            </ul>
          </div>
        </div>
        </SlideY>
    );
}

export default Contact;