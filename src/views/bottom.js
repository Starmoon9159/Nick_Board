import React from 'react';
import '../css/bottom.css'
import { Link } from 'react-router-dom';
const Bottom = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2023 Made by 陳威皓. All Rights Reserved. <p>找到了個神奇的錯誤? <Link to='/report' className='report'>回報它!</Link></p></p>
                </div>
            </footer>
        </div>
    );
}

export default Bottom;
