import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Paneer', type: 'paneer'},
    {label: 'Spices', type: 'spices'},
    {label: 'Cheese', type: 'cheese'},
];


const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;