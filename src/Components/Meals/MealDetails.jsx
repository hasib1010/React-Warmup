import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
    const meal = useLoaderData();
    console.log(meal.meals[0]);
    const mealData = meal.meals[0];
    return (
        <div>
            <h1>Meal name: {mealData.strMeal}</h1> 

            <img src={mealData.strMealThumb} alt="" />
            <article><strong>Instruction <br /><hr /></strong> {mealData.strInstructions}</article>
            <p>see the process</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kgL9CWUgAYU?si=ikIiCS3UvUam7COO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
};

export default MealDetails;