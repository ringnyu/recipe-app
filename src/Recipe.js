import React from 'react'

const Recipe = ({title, calories, dishType, image, ingredients}) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <div className="dish-details">
            <p>
                <span><b>Dish Type: </b>{dishType}</span>&emsp;
                <span><b>Calories: </b>{calories.toFixed(2)}</span>
            </p>
            </div>
            
            <img src={image} alt="" className="recipe__image"/>
            <ol>
                <h2>List of Ingredients</h2>
                {ingredients.map(ingredient => (
                    <li key={ingredient.foodId}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;