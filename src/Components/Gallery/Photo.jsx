import { Link, useNavigate } from "react-router-dom";

const Photo = ({photo}) => {
    const {id, title,thumbnailUrl}= photo;
    const navigate = useNavigate();
    const handleCLick = ()=>{
        navigate(`/photo/${id}`)
    }
    
        return (
        <div className="photo">
            <p>{title}</p>
            <img src={thumbnailUrl} alt="" />  <br />   
            <Link to={`/photo/${id}`}> Click to View</Link>
            <button onClick={handleCLick}>Btn for details</button>
           
        </div>
    );
};

export default Photo;