"use client"
import {useEffect, useState} from "react";

export function MealIdeas( {ingredient} ) {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState([]);

    async function fetchMealIdeas( ingredient ) {
        try {
            const search = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;
            const response = await fetch(search);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMeals( data.meals );
            
            setError(null);
            } 
        catch (e) {
            setError(e.message);
        }
    }


    useEffect(() => {
        fetchMealIdeas(ingredient);
        console.log(meals)
    }, []);

    return (
        <div>
            <div className="p-2 m-10 bg-amber-700 max-w-sm">
                <h2 className="text-2xl font-bold">Meals using {ingredient}</h2>
                <ul>
                    {meals.map((value) => (
                        <li key={value.idMeal}>{value.strMeal}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}