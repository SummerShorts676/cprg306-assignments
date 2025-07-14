"use client"

// created this for assignment week 8

import { useEffect, useState } from "react"

// Made it out of export.. why.. cause its mentioned to do so in doc, make it outside of component
async function fetchMealIdeas(ingredient) { // fetching data using ingredients which is made somewhere and appending to list
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            console.log(response.status);
            return [];
        }
        const data = await response.json();
        return data.meals || [];
    } catch (error) { // Catching here
        console.log(`Error: ${error.message}`);
        return [];
    }
}

export default function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        if (ingredient) { // moved it here so that error doesn't appear and it recommended this
            async function loadMealIdeas() {
                const mealIdeas = await fetchMealIdeas(ingredient);
                setMeals(mealIdeas);
            }
            loadMealIdeas();
        } else {
            setMeals([]);
        }
    }, [ingredient]); // dependencies so that SAIT isn't blacklisted even tho it is

    return (
        <div className="w-fit mt-10 bg-gray-900 py-5 px-5 rounded border-3 border-gray-800">
            <div className="w-full text-left text-amber-400 h-fit p-1 bg-gray-800 rounded border-2 border-gray-800 mx-auto">
                <h2 className="text-3xl mb-2">Meal Ideas</h2>
                <p className="mb-1">
                    {meals.length === 0 ? (`No meal ideas found for ${ingredient}`) : (`Here are some meal ideas using ${ingredient}:`) /* Conditional Rendering to match example */} 
                </p>
            </div>
            <ul>
                {meals.map(meal => (
                    <li 
                        className="bg-blue-950 text-amber-400 px-3 py-1 my-3 mx-auto w-full rounded cursor-pointer block text-left hover:bg-blue-800 hover:outline-offset-4 hover:outline-2 hover:outline-amber-500"
                        key={meal.idMeal}
                    >
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}