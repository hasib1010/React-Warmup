import { Link } from "react-router-dom";

const Post = ({post}) => {
    const{id, title}=post;
    return (
        <div className="post">
        <small >{title}</small><hr />
        <Link to={`/post/${id}`}>Read More</Link>
        </div>
    );
};

export default Post;