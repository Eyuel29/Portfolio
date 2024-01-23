import "../../assets/css/Base.css";
import "../../assets/css/Skills.css";
import SlideX from "../utils/SlideX";


const Skills = () => {

    const skills = {
        technologies: [
            "Java",
            "Spring",
            "PHP",
            "Flutter",
            "React-native",
            "HTML5",
            "CSS3",
            "Tailwind",
            "Javascript",
            "Typescript",
            "React",
            "Redux",
            "Mysql",
            "Mongo-DB",
        ],

        images: [
            "media/java.png",
            "media/spring.png",
            "media/php.png",
            "media/flutter.png",
            "media/native.png",
            "media/html.png",
            "media/css.png",
            "media/tailwind.png",
            "media/javascript.png",
            "media/typescript.png",
            "media/native.png",
            "media/redux.png",
            "media/mysql.png",
            "media/mongo.png",
        ]
    }

    let delay = 50;

    return (
        <div className="skill-set">
            <h1 className="page-title">Some of my skills</h1>
            <ul className="skills">
                {skills.technologies.map((tech, index) => (
                    <SlideX
                    delay={delay+=25}
                    key={index} >
                      <li className="technology">
                          <img src={skills.images[index]} alt={tech} />
                          <p className="skill-name">{tech}</p>
                      </li>
                    </SlideX>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
