import React, { useEffect, useState } from 'react';
import '../css/content.css';
import Titleimg from './titleimg';
function renderMaps(backendData) {
    return Object.keys(backendData).map((key, i) => (
        
            <div className='maps-container'>
                <div key={i} className='maps_box'>
                    <div className='title-image'>
                        <img
                            src={backendData[key].img_url}  
                            alt={backendData[key].title}
                            style={{
                                width: '100%',          
                                height: '70%',          
                                objectFit: 'fill',    
                                borderTopLeftRadius: '4px', 
                                borderTopRightRadius: '10px',
                            }}
                        />
                    </div>
                    <p><strong>{backendData[key].title}</strong></p>
                    <p>{backendData[key]['dep:']}</p>
                    <p>{backendData[key].starts}</p>
                    <div>
                        {backendData[key].tags.map((tag, j) => (
                            <span key={j} className="tag_box">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
       



    ));
}

const Content = () => {
    const [backendData, setBackendData] = useState({});

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data.Maps);
            }
        )
    }, []);

    return (
        <div>
            {(Object.keys(backendData).length === 0) ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {Titleimg}
                    {renderMaps(backendData)}
                </div>
            )}
        </div>
    );
}

export default Content;
