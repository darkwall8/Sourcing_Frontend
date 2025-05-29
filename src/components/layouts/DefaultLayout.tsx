import { Outlet } from "react-router-dom";
import Header from "../Header";


function DefaultLayout() {
    return (
        <div className={"h-screen w-screen min-lg:overflow-hidden overflow-x-hidden"}>
            <div className="h-2/12">
                <Header />
            </div>
            <main className={"h-10/12"}>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout;