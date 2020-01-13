import React from 'react';
import './menu-item.styles.scss';

//Kuvalinkki on tuotu tyyliominaisuuteen rivikohtaisesti
//Dynaaminen className riippuen kuvakoosta

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>OSTA</span>
        </div>
    </div>
);

export default MenuItem;