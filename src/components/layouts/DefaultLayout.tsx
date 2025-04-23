import { Outlet } from "react-router-dom";
import Header from "../Header";


function DefaultLayout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DefaultLayout;