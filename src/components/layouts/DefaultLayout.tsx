import { Outlet } from "react-router-dom";
import Header from "../Header";


function DefaultLayout() {
    return (
        <div className={"h-screen w-screen flex flex-col md:overflow-hidden overflow-y-scroll"}>
            <div className="h-fit">
                <Header />
            </div>
            <main className={"h-full md:overflow-hidden overflow-y-scroll"}>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout;