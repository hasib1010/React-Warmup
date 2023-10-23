import { useLoaderData } from "react-router-dom";
import User from "./User";
import './users.css'
const Users = () => {
    const users = useLoaderData();
    return (
     
        <div>
            <h1>Awesome Users {users.length}</h1>            

           <div className="users">
           {
                users.map(users=> <User users={users} key={users.id}></User>)
            }
           </div>
        </div>
    );
};

export default Users;