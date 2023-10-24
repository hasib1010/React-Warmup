import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate('/')
    }
    return (
        <div>
                <h1>404 NOT FOUND!</h1>
               
                <p>{error.statusText||error.message}</p>
                <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;