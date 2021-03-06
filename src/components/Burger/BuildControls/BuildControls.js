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
        <p>Current Price : <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={ () => props.ingredientAdded(ctrl.type)}
            removed={ () => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
        >PLACE ORDER</button>
    </div>
);

export default buildControls;