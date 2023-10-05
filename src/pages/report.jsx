import React, { useState } from 'react';
import '../css/report.css';
import Header from '../views/Header';

const Report = () => {
  const [errorDescription, setErrorDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    setErrorDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookUrl = '';
    var Today = new Date();
    
    const formData = new FormData();
    formData.append('content', '```\n' + errorDescription + `\n\n${Today}` + '```');
    formData.append('file', file);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Done');
      } else {
        console.error('發生錯誤。');
      }
    } catch (error) {
      console.error(error);
    }

    setErrorDescription('');
    setFile();
  };

  return (
    <div>
      <Header />
      <div className="error-report-container">
        <h2>錯誤回報</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="error-description"
            placeholder="請寫下一些內容..."
            value={errorDescription}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="custom-file-input"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="custom-file-upload">
            <i className="fa fa-cloud-upload"></i> 上傳圖片
          </label>
          <button type="submit" className="submit-button">
            發送!
          </button>
        </form>
        <p className='done'>成功發送!</p>
      </div>
    </div>
  );
};

export default Report;
