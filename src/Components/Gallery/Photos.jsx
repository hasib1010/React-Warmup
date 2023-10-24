import { useLoaderData } from "react-router-dom";
import Photo from "./photo";
import './Gallery.css'
const Photos = () => {

    const photos = useLoaderData();

    return (
        <div>
            <h1>All Photos: {photos.length}</h1>
            <div className="gallery">
                {
                    photos.map(photo=><Photo photo={photo} key={photo.id}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;