import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import DashBoardHeader from "../DashBoardHeader";


function AuthLayout() {
    return (
        <div className="w-full flex">
            <NavBar />
            <main className="w-full min-h-screen pb-4 px-4 bg-usual_gray">
                <DashBoardHeader />
                <Outlet />
            </main>
        </div>
    )
}

export default AuthLayout;