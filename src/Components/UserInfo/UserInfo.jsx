import { Link, useLoaderData } from "react-router-dom";

const UserInfo = () => {
    const user = useLoaderData();
    const {name, email, website}=user;
    return (
        <div>
            <h1>User name: {name} </h1> 
            <h2>{email}</h2> 
            <a href={`https://${website}`}target="__blank">Visit</a>
        </div>
    );
};

export default UserInfo;