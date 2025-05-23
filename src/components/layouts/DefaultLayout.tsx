import { Outlet } from "react-router-dom";
import Header from "../Header";


function DefaultLayout() {
    return (
        <div className={"h-screen w-screen lg:overflow-hidden"}>
            <Header />
            <main className={"h-11/12"}>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout;