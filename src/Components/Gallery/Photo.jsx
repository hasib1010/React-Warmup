import { Link } from "react-router-dom";

const Photo = ({photo}) => {
    const {id, title,thumbnailUrl}= photo;
    return (
        <div className="photo">
            <p>{title}</p>
            <img src={thumbnailUrl} alt="" />  <br />   
            <Link to={`/photo/${id}`}> Click to View</Link>
        </div>
    );
};

export default Photo;