import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex">
            <div className="w-[200px] bg-slate-900 min-h-screen">
                <ul className="text-white menu pl-10 mt-10">
                    <li className="font-semibold">
                         Home
                    </li>
                </ul>
            </div> 
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
