import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { setUrl } from './url';
import '../../css/Loading.css';

function Loading() {
  const history = useHistory();

  const [fileUrl, setFileUrl] = useState('');
  const handleLoad = async () => {
    // const file = getElement().target.files[0];
    // const storageRef = app.storage().ref();
    // const fileRef = storageRef.child(file.name);
    // await fileRef.put(file);
    // setFileUrl(await fileRef.getDownloadURL());
  };

  if (fileUrl !== '') {
    setUrl(fileUrl);
    history.push('/success');
  }

  return (
    <div className="load">
      <h2>Uploading</h2>
      <div className="mouve">
        <div className="mouve-in"></div>
      </div>
    </div>
  );
}

export default Loading;
