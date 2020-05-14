import React from 'react'
import { withRouter } from "react-router-dom";
import './menu-item.style.scss';
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
<div  onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
    <div
    style={{backgroundImage: `url(${imageUrl})`}}
     className="background-image" />
    <div className='content'>
        <div className='title'>
            {title.toUpperCase()}
        </div>
        <div className='subtitle'>
            SHOP NOW    
        </div>
    </div>
</div>
)

export default withRouter(MenuItem);

