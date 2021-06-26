import React, { useState } from 'react';
import '../../css/Loading.css';

function Loading() {
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
