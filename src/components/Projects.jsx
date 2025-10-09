import { projectsInfo } from "../data/projectinfo";

export default function ProjectsContainer()  {
    
    return (
        <div className="project">
            <ProjectsCards/>
        </div>
    )
    
}
function ProjectsCards() {
    return projectsInfo.map((project) => (
        <div className="projectItem" key={project.name}>
            <a href={project.link} target="_blank">
                <h5>{project.name}</h5>
                <img src={project.image} alt={project.name} />
            </a>
        </div>
    ));
}