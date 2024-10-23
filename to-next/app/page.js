import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className="main__h1">Oi! 👾 Me Chamo Sabrina, sou:</h1>

        <img className="main__profile-picture" src="img/profilePicture.jpg" alt="Foto de perfil da Sabrina"/>

        <h2 className="main__h2"><b>Software Developer</b></h2>
      </div>

      <p className="main__about-me">
          Tenho 21 anos de idade e atualmente moro em São Paulo - SP.<br/>
          Após minha experiência de 2 anos construindo <b>APIs</b> com <b>Node.js</b> e <b>testes automatizados</b>, resolvi migrar para a área de <b>Front-End</b>, onde crio Apps utilizando o ecossistema <b>React</b> e claro, sempre seguindo boas práticas de documentação e <b>metodologias ágeis</b>.
      </p>

      <p className="contact-me">
        <b className="contact-me-text">Se interessou pelo meu trabalho?</b><br/>
        Envie um email para <span className='email'>sabrina.barros2045@gmail.com</span>
      </p>ß
    </div>
  );
}
