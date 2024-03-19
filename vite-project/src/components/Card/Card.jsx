import './card.css'
import CardLink from '../CardLink/CardLink.jsx'

const Card = ({name, imagePath, tag, description, gitHubURL, demoURL}) => {

  return (
    <article className="card">

      <div className="card__head">
        <h2 className="card__title">{name}</h2>

        <img className="card__img" src={imagePath}/>

        <span className={`card__tag card__tag--${tag}`}>{tag}</span>
      </div>

      <p className="card__text">{description}</p>

      <div className="card__footer">
        {gitHubURL && <CardLink gitHubURL={gitHubURL}/>}
        {demoURL && <CardLink demoURL={demoURL}/>}
      </div>

    </article>
  )
}

export default Card