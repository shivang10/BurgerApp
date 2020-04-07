import React, { Component } from "react";

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            spices: 0,
            cheese: 0,
            paneer: 0
        }
    }

    render(){
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;