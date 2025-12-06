import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import data from "../data.json";


const HomePage = () => {

   const[recipes, setRecipes] = useState([]);

   useEffect(() => {
    setRecipes(data);
   }, []);
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
                <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
                <div className="border rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow">
                    {/* Recipe Image */}
                    <img 
                       src={recipe.image}
                       alt={recipe.title}
                       className="w-full h-48 object-cover rounded mb-4 hover:scale-105 transition-transform duration-300 ease-in-out"
                       />
                    {/* Recipe Title */}
                    <h2 className="text-xl font-semibold mb-2 text-blue-800 hover:text-blue-500">{recipe.title}</h2>
                    {/* Recipe Description */}
                    <p className="text-gray-600 mb-4">{recipe.summary}</p>
                    {/* View Recipe Button */}
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">View Recipe</button>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default HomePage