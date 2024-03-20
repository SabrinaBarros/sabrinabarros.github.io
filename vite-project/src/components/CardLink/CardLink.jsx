import './cardLink.css'
import gitHubIcon from '../../assets/icons/github.svg'
import externalLinkIcon from '../../assets/icons/externalLink.svg'

const CardLink = ({gitHubURL, demoURL}) => {

  const linkText = demoURL ? 'Live Demo' : 'Code'
  const liveDemoClass = demoURL && 'link--live-demo'
  const icon = demoURL ? <img src={externalLinkIcon} class="link__svg"/> : <img src={gitHubIcon} class="link__svg"/>
  const url = demoURL ? demoURL : gitHubURL

  return (
    <a className={`link ${liveDemoClass}`} href={url} target="_blank">{linkText}{icon}</a>
  )
}

export default CardLink