import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./posts.css"
const Posts = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <h1>Awws</h1>
        <div className="posts">
        
          {
            posts.map(post=> <Post post={post} key={post.id}></Post>)
          }
        </div>
        </div>
    );
};

export default Posts;