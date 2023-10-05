import React, { useState } from 'react';
import '../css/report.css';
import Header from '../views/Header';

const Nick = () => {



  const [errorDescription, setErrorDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isDoneVisible, setIsDoneVisible] = useState(false);
  const [doneStyle, setDoneStyle] = useState({});
  const [onerrStyle, setonerrStyle] = useState({});
  const handleInputChange = (e) => {
    setErrorDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {


    setDoneStyle({
      display: 'none'
    });
    setonerrStyle({
      display: 'none'
    });


    setIsDoneVisible(true);

    e.preventDefault();

    const webhookUrl = 'https://discord.com/api/webhooks/1159429082430328902/GH7MHbNh-SM9tkisTXEQ5T8Ktzuhhn2T7XgGfXO-4pDy_wiXIQMKStwtHBAQhCqhVFbm';
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
        setDoneStyle({
          display: 'flex'
        });

      } else {
        console.error('發生錯誤。');

        setonerrStyle({
          display: 'flex'
        });

      }
    } catch (error) {
      console.error('錯誤:'+error);
    }

    setErrorDescription('');
    setFile();
  };

  return (
    <div>
      <Header />
      <div className="error-report-container">
        <h2>發送匿名消息給我!</h2>
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
        {<p className='done' style={doneStyle}>成功發送!</p>}
        {<p className='onerr' style={onerrStyle}>發送失敗...</p>}
      </div>
    </div>
  );
};

export default Nick;
