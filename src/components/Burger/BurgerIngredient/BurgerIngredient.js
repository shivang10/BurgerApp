import React from 'react';

import classes from './BurgerIngredient.css'

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case ('bread-bottom'):
            ingredient = <div className="BreadBottom"></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('paneer'):
            ingredient = <div className={classes.Paneer}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ('spices'):
            ingredient = <div className={classes.Spices}></div>;
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
};

export default burgerIngredient;