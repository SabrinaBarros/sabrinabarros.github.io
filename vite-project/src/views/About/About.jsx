import './about.css'

const About = () => {

  return (
    <>
      <main className="main">

        <div>
          <h1 className="main__h1">Oi! 👾 Me Chamo Sabrina, sou:</h1>

          <img className="main__profile-picture" src="profilePicture.jpg" alt="Foto de perfil da Sabrina"/>

          <h2 className="main__h2"><b>Software Developer</b></h2>
        </div>

        <div className="about-container">
          <p className="main__about-me">Desenvolvedora de 21 anos, residente no estado de São Paulo.</p>
          <p className="main__about-me">Com 3 anos de experiência, trago a solidez técnica do back-end para criar interfaces front-end intuitivas e esteticamente agradáveis.</p>
          <p className="main__about-me">Estou aberta para novas propostas e sempre disposta a novos desafios!</p>
        </div>

        <button className="main__button">
          <a className="main__button__link" href="https://www.linkedin.com/in/saazbarros/" target="_blank">Entre em Contato</a>
        </button>

      </main>
    </>
  )
}

export default About