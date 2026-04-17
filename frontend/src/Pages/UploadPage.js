import React, { useState } from 'react';

function UploadPage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-card">
        <h1 className="title">Upload Notes</h1>
        <p className="upload-subtext">
          Upload your PDF or text notes and let AI help you study smarter.
        </p>

        <div className="upload-box">
          <label htmlFor="fileUpload" className="text">
            Choose your study material
          </label>
          <br />
          <input
            id="fileUpload"
            type="file"
            className="input-field"
            onChange={handleFileChange}
          />

          {selectedFile && (
            <p className="file-name">Selected file: {selectedFile.name}</p>
          )}
        </div>

        <button className="btn-primary">Upload</button>
      </div>
    </div>
  );
}

export default UploadPage;