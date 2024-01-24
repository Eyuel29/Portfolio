import '../../assets/css/Projects.css';

const ProjectCard = (props) =>{
    const project = props.project;
    return (
        <div key={project.id} className="project-card">
            <img className="project-image" src={project.src} alt="note" />
            <div className="project-header">
                <h1 className="project-title">{project.title}</h1>
                {/* <a target="blank" className="project-link" href={project.link}> <GoArrowUpRight className="github-link"/> </a>  */}
            </div>
            <div className="project-body">
                <p>{project.body}</p>
                <ul>{
                        project.langs.map((lang) => (
                        <li className="project-tools" key={lang}>{lang}</li>
                        ))
                }</ul>
            </div>
          </div>
    );

}

export default ProjectCard;