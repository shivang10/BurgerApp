import React from 'react';

import burgerLogo from '../../assets/Images/burger_logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="mu burger" />
    </div>
);

export default logo;