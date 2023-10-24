import { useLoaderData, useNavigate } from "react-router-dom";

const PhotoDetails = () => {
    const photo = useLoaderData();

    console.log(photo);
    const { id, title, url } = photo;

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div>
           
            <h1>{photo.id}</h1>
            <h1>{title}</h1>
            <button onClick={handleBack}>Back</button><br /><br />
            <img src={url} alt="" />

        </div>
    );
};

export default PhotoDetails;