import { useState } from 'react';
import copyIcon from '../../assets/icons/copy.svg'
import './copyToClipboard.css'

const CopyToClipboard = ({text}) => {

  const [tooltip, setTooltip] = useState(false);

  const copy = () => {

    setTooltip(false);

    navigator.clipboard.writeText(text).then(() => {
      setTooltip(true);
      setTimeout(() => setTooltip(false), 2000);
    });
  }

  return (
    <span className='copy-to-clipboard-container'>

      {tooltip && (<span className = 'copy-to-clipboard__tooltip'> Copiado! </span>)}

      <button className='copy-to-clipboard__btn' onClick={copy} disabled={tooltip}>
        <img src={copyIcon} className="copyIcon"/>
      </button>

  </span>
  )
}

export default CopyToClipboard