import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import { Watch  } from 'react-loader-spinner'
const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ?
                <Watch
                height="80"
                width="80"
                radius="48"
                color="#4fa94d"
                ariaLabel="watch-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              /> :
                    <Outlet></Outlet> 
            }

        </div>
    );
};

export default Home;