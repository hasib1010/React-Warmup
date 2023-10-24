import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";
import "./Meals.css"

const Meals = () => {
    const mealsData = useLoaderData();
    const meals = mealsData.meals;
    return (
        <div>
            <h1>All Meals: {meals.length}</h1>
            <div className="meals">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;