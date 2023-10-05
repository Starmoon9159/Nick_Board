import React from 'react';
import '../css/title_img.css'
import imgs from '../images/1.jpg'
const Titleimg = () => {
    return (
        <div className="image-container">
            <img src={imgs} alt="圖片出錯了!! 請回報給開發者!" />
            <div className="image-text">
            《地圖創作》
            </div>
        </div>
    );
}

export default Titleimg;
