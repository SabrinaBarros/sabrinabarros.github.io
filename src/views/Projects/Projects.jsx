import './projects.css'
import Card from '../../components/Card/Card.jsx'
import projectsDB from "../../database/projects.json"

const Projects = () => {

  const $projects = projectsDB.projects.map((project) => {
    return (
      <Card
        name={project.name}
        imagePath={project.imagePath}
        tag={project.tag}
        gitHubURL={project.gitHubURL}
        demoURL={project.demoURL}
        description= {project.description}
        key={project._id}
      />
    )
  })

  return (
    <main className="projects">

      {$projects}

    </main>
  )
}

export default Projects
