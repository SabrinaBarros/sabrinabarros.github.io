import './projects.css'
import Card from '../../components/Card/Card.jsx'

const Projects = () => {

  return (
    <main className="projects">

      <Card
        name="Site Pessoal"
        imagePath="img/projects/website.png"
        tag="app"
        gitHubURL="https://github.com/SabrinaBarros/sabrinabarros.github.io"
        demoURL="/"
        description="🌈Esse maravilhoso Website.✨"
      />

      <Card
        name="React Pomodoro"
        imagePath="img/projects/pomodoroTimer.png"
        tag="app"
        gitHubURL="https://github.com/SabrinaBarros/pomodoroTimer?tab=readme-ov-file"
        demoURL="https://sabrinabarros.github.io/pomodoroTimer/"
        description="Cronômetro intuitivo construído com React, seguindo a técnica Pomodoro. 🍅"
      />

      <Card
        name="Ditto Boilerplate"
        imagePath="img/projects/ditto.png"
        tag="boilerplate"
        gitHubURL="https://github.com/SabrinaBarros/ditto-boilerplate"
        demoURL="https://sabrinabarros.github.io/ditto-boilerplate/src/index.html"
        description="⚙️ Boilerplate Front-End simples e elegante, desenvolvido com HTML e CSS vanilla. ☂️"
      />

      <Card
        name="Kadabra"
        imagePath="img/projects/kadabra.png"
        tag="cli"
        gitHubURL="https://github.com/SabrinaBarros/kadabra"
        description="Ferramenta que utiliza a Cifra Vigenere para criptografar textos e senhas."
      />

    </main>
  )
}

export default Projects
