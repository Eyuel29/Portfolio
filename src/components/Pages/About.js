import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../../assets/css/Base.css";
import "../../assets/css/About.css";

const About = () =>{

    return (
        <div className="about">
            <div>
                <div className='about-img'>
                    
                    <img src='/media/personal-nobg.png' alt='me'/>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Quidem itaque, magnam ratione assumenda recusandae reprehenderit 
                        illo hic ea praesentium adipisci.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default About;