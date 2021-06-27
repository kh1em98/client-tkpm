import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import '../../css/Loading.css';
import '../../css/Upload.css';
import image from '../../images/upload.svg';
import { setUrl } from '../../utils/url';
import { uploadGateway } from '../../services/index';
import Success from './Success';

function Upload({ imageUrl, setImageUrl }) {
  const history = useHistory();
  const dragDrop = useRef<HTMLDivElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  let zone, file;

  useEffect(() => {
    dragDrop.current?.focus();
    zone = dragDrop.current;

    zone.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      file = e.dataTransfer.files[0];
      drop(file);
      handleShow();
    });
  }, []);

  const drop = async (file) => {
    try {
      setIsUploading(true);
      const response = await uploadGateway.uploadImage(file);
      setImageUrl(response.url);
    } catch (error) {
      console.log('error upload : ', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleLoad = async (e) => {
    try {
      setIsUploading(true);
      const file = e.target.files[0];
      const response = await uploadGateway.uploadImage(file);
      setImageUrl(response.url);
    } catch (error) {
      console.log('error upload : ', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleShow = () => {
    const load = document.querySelector('.load');
    const upload = document.querySelector('.upload');
    if (imageUrl === '') {
      (upload as any).style.display = 'none';
      (load as any).style.display = 'flex';
    }
  };

  useEffect(() => {
    if (imageUrl !== '') {
      const load = document.querySelector('.load');
      const upload = document.querySelector('.upload');
      (upload as any).style.display = 'flex';
      (load as any).style.display = 'none';
      setUrl(imageUrl);
      setIsSuccess(true);
    }
  }, [imageUrl]);

  return (
    <>
      {/*loader*/}
      {isSuccess ? (
        <Success imageUrl={imageUrl} />
      ) : (
        <>
          <div
            style={{ display: isUploading ? 'flex' : 'none' }}
            className="load">
            <h2>Uploading</h2>
            <div className="mouve">
              <div className="mouve-in"></div>
            </div>
          </div>

          {/*uploader*/}
          <div className="upload">
            <div className="upload-tile">
              <h1>Upload your image</h1>
              <h2>File should be Jpeg, Png</h2>
            </div>

            <div ref={dragDrop} className="drag-drop">
              <img src={image} alt="drop-drag" />
              <h3>Drag & Drop your image here</h3>
            </div>

            <div className="upload-bottom">
              <h1>or</h1>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  inputRef.current!.click();
                }}>
                choose image
              </button>

              <input
                type="file"
                hidden
                ref={inputRef}
                placeholder="Choose a file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => {
                  e.preventDefault();
                  handleLoad(e);
                  handleShow();
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Upload;
