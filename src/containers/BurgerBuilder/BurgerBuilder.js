import React, { Component } from "react";

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 40,
    paneer: 70,
    cheese: 65,
    spices: 30
};

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 0,
            spices: 0,
            cheese: 0,
            paneer: 0
        },
        totalPrice: 35,
        purchaseable: false
    }

    updatePurchase (ingredients){
        // const ingredients = {
        //     ...this.state.ingredients
        // };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum+el;
            }, 0);
        this.setState({purchaseable: sum>0});
    }

    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCounted;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice,
        ingredients: updatedIngredients});
        this.updatePurchase(updatedIngredients);

    }

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updateCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCounted;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchase(updatedIngredients);
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded = {this.addIngredient}
                ingredientRemoved = {this.removeIngredient}
                disabled={disabledInfo}
                purchasable={this.state.purchaseable}
                price={this.state.totalPrice}
                />
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;