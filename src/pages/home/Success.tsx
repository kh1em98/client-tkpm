import React from 'react';
import { getUrl } from './url';
import '../css/Success.css';
import { useHistory } from 'react-router';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Success() {
  const history = useHistory();
  if (!getUrl()) {
    history.push('/');
  }

  function copyText(htmlElement) {
    if (!htmlElement) {
      return false;
    }
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    (inputElement as any).parentNode.removeChild(inputElement);
  }

  const handleCopy = () => {
    copyText(document.querySelector('.myInput'));
  };
  return (
    <div className="upload">
      <div className="success-top">
        <CheckCircleIcon></CheckCircleIcon>
        <h2>Uploaded Successfully</h2>
      </div>
      <img className="img" src={getUrl()} alt="image-upload" />
      <div className="success-bottom">
        <p className="myInput">{getUrl()}</p>
        <button onClick={handleCopy}>copy Link</button>
      </div>
    </div>
  );
}

export default Success;
