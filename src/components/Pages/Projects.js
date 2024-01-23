import Masonry from "react-masonry-css";
import ProjectCard from "../cards/ProjectCard";
import SlideY from "../utils/SlideY";

import "../../assets/css/Base.css";
import "../../assets/css/Projects.css";

const Projects = () =>{

    const breakpoints = {
        default: 3,
        1100: 3,
        1000: 2,
        650: 1,
      };

    const projects = [
        { 
        src : "media/note-taking.png",
        link : "https://github.com/Eyuel29/College-Manaement-System-web-based-",
        title : "Note taking app",
        body :`
        An Android application designed for note-taking, providing a user-friendly 
        interface for seamlessly adding, viewing, editing, and deleting notes. The 
        application utilizes a Room database to store data and is structured based 
        on the MVVM (Model-View-ViewModel) architecture.`,
        langs : ["java","xml","mysql"],  },

        { 
            src : "media/music-player.png",
            link : "https://github.com/Eyuel29/College-Manaement-System-web-based-",
            title : "Music player app",
            body :`
            A feature-rich Android music player app with shuffle and repeat options. 
            Users can categorize songs into playlists, artists, and genres for a customized 
            listening experience.`,
            langs : ["java","xml","mysql"],  },

        { 
            src : "media/video-music.jpeg",
            link : "https://github.com/Eyuel29/College-Manaement-System-web-based-",
            title : "Video to music converter app",

            body :`This Android application is handy for android users 
                   seeking to transform video content into various audio formats. With its versatile 
                   functionality, the app supports conversions from formats such as mp4 to mp3, mp4 
                   to wav, mov to mp3, and mov to wav.`,

            langs : ["java","xml","mysql"],  },
        { 
            src : "media/file-sharing.png",
            link : "https://github.com/Eyuel29/College-Manaement-System-web-based-",
            title : "Peer to peer file sharing app",
            body :`
            An Android app facilitating file sharing between devices via a wireless 
            network using peer-to-peer technology. It supports a variety of file types, 
            including documents (doc, pdf, txt), music files, images, videos, and Android 
            applications (APKs).
            `,
            langs : ["java","xml"]},
        { 
            src : "media/college.png",
            link :"https://github.com/Eyuel29/College-Manaement-System-web-based-",
            title : "College management system",
            body : `A comprehensive college management website with diverse features, catering 
                    to multiple user roles such as administrators, students, and teachers. Teachers 
                    have access to student management functionalities, while students can conveniently 
                    view their marks and grades upon registration. Administrators retain the ability 
                    to create and delete user accounts, and users can update both their usernames and 
                    passwords.`,
    
            langs : ["php","html","css","jquery","javascript","mysql"] },
    ];

    return (
        <div className="projects-list">
            <SlideY delay={400} >
                <Masonry
                    breakpointCols={breakpoints}  
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column" >
                        {projects.map((project,index) => (     
                            <ProjectCard 
                            key={index}
                            project={project} />            
                        ))}
                </Masonry>                    
            </SlideY>
        </div>
    );
}

export default Projects;