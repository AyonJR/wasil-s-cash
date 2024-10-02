import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex">
            <div className="w-64 bg-slate-900 min-h-screen">

            </div> 
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;