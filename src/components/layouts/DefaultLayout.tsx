import { Outlet } from "react-router-dom";
import Header from "../Header";


function DefaultLayout() {
    return (
        <div className={"h-screen w-screen min-lg:overflow-hidden overflow-x-hidden"}>
            <div className="h-fit">
                <Header />
            </div>
            <main className={"h-full"}>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout;