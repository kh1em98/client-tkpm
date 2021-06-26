import React from 'react';
import { getUrl } from '../../utils/url';
import '../../css/Success.css';
import { useHistory } from 'react-router';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Success({ imageUrl }) {
  return (
    <div className="upload">
      <div className="success-top">
        <CheckCircleIcon></CheckCircleIcon>
        <h2>Uploaded Successfully</h2>
      </div>
      <img className="img" src={imageUrl} alt="image-upload" />
    </div>
  );
}

export default Success;
