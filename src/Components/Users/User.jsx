import { Link } from "react-router-dom";
import "./user.css"
const User = ({users}) => {
    const {name, email,username,phone,website} = users;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <h6>{phone}</h6>
            <h5>{website}</h5>
            <Link to={`/user/${users.id}`}>Show Details</Link>
        </div>
    );
};

export default User;