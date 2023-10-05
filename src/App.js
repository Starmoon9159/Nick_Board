/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Report from './pages/report';
import Main from './pages/main';
import Nick from './pages/nick';
function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []);


  return (
    <Router>
    
    <Routes>
        <Route exact path='/' exact element={<Main />} />
        <Route path='/report' element={<Report />} />
        <Route path='/nick' element={<Nick />} />
    </Routes>
</Router>
  )
}

export default App;


/*

    <div>
      {(typeof backendData.users === 'undefined') ? (
       <p>Loading...</p> 
      ) : (
        backendData.users.map((user,i) => (
          <p key={i}>{user}</p>
        ))
      )}

       
    </div>
*/
