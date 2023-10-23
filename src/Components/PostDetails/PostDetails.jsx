import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post=useLoaderData();
    // console.log(post);
    const {title, body, id}= post;
    return (
        <div>
            <h1>{id}</h1>
                    <h2>{title}</h2>
                    <p>{body}</p>

        </div>
    );
};

export default PostDetails;