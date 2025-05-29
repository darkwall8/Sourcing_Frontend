import { Outlet } from "react-router-dom";
import Header from "../Header";


function DefaultLayout() {
    return (
        <div className="h-screen w-screen">
            <div className="h-1/12 px-12 flex items-center w-full">
                <Header />
            </div>
            <main className="h-11/12 overflow-hidden">
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout;