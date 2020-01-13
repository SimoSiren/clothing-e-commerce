import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

//Kuvalinkki on tuotu tyyliominaisuuteen rivikohtaisesti
//Dynaaminen className riippuen kuvakoosta

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Osta</span>
        </div>
    </div>
);

export default withRouter(MenuItem);