/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Header from '../views/Header'
import Content from '../views/content.js'
import Titleimg from '../views/titleimg';
import Bottom from '../views/bottom';

const Main = () => {
    return (
        <div>
            <div>
                <Header />
                <Titleimg />
                <Content />
                <Bottom />
            </div>
        </div>
    );
}

export default Main;
