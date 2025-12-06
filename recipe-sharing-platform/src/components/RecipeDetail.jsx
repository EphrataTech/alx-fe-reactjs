import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
}, [id]);

if (!recipe) {
    return <p className="text-center mt-8"></p>
}
  return (
    <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
              src={recipe.image}
                alt={recipe.title}  
                className="w-full h-64 object-cover rounded mb-4 hover:scale-105 transition-transform duration-300 ease-in-out "/>

                <h1 className="text-3xl font-bold mb-4 text-blue-800 hover:text-blue-500">{recipe.title}</h1>

                <h2 className="text-xl font-semibold mb-2 text-green-700">Ingredients</h2>
                <ul className="list-disc list-inside mb-4">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-600">{ingredient}</li>
                    ))}
                </ul>

                <h2 className="text-xl font-semibold mb-2 text-green-700">Instructions</h2>
                <p className="text-gray-700">{recipe.instructions}</p>
        </div>
    </div>
  )
}

export default RecipeDetail