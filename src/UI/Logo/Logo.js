import React from 'react';

import MusicLogo from '../../assets/images/music.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={MusicLogo} alt="MyMusic" />
    </div>
);

export default logo;