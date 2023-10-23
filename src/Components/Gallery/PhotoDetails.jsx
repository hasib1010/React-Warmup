import { useLoaderData } from "react-router-dom";

const PhotoDetails = () => {
    const photo = useLoaderData();
   
    console.log(photo);
    const {id, title, url} = photo;
   
    return (
        <div>
            <h1>{photo.id}</h1>
            <h1>{title}</h1>
            <img src={url} alt="" />

        </div>
    );
};

export default PhotoDetails;