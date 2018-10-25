import React from 'react';

import MusicLogo from '../assets/images/music.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={MusicLogo} alt="MyMusic" />
    </div>
);

export default logo;