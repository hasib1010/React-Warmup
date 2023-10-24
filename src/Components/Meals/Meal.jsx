import { Navigate, useNavigate } from "react-router-dom";

const Meal = ({meal}) => {
    const {idMeal} = meal;
    const navigate = useNavigate();
    const handleMeal=()=>{
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div  onClick={handleMeal}>
                <p>{meal.strMeal}</p>
                <img src={meal.strMealThumb} alt="" />
                <button>See More</button>
        </div>
    );
};

export default Meal;