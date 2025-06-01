import { Outlet } from "react-router-dom";
import feedback from "/icons/feedback.svg"
import NavBar from "../NavBar";
import DashBoardHeader from "../DashBoardHeader";
import Popup from "../common/PopUp";
import FeedBack from "../common/FeedBack";
import { useState } from "react";


function AuthLayout() {

    const [isDisplayFeed, setIsDisplayFeedback] = useState(false)

    return (
        <div className="w-screen flex h-screen overflow-hidden">
            <div className="w-2/12">
                <NavBar />
            </div>
            <main className="w-10/12 min-h-screen pb-4 bg-usual_gray">
                <div className="h-1/12">
                    <DashBoardHeader />
                </div>
                <div className="h-11/12">
                    <Outlet />
                </div>
            </main>
            <Popup isDisplayed={isDisplayFeed} onDisplayChange={setIsDisplayFeedback} >
                <FeedBack />
            </Popup>
            <div onClick={() => setIsDisplayFeedback(true)} className="absolute bottom-5 cursor-pointer rounded-md px-4 h-10 left-5 gap-2 flex items-center border-2 hover:bg-primary/5 border-gray-400">
                <img src={feedback} alt="feedback" />
                <p>Feedback</p>
            </div>
        </div>
    )
}

export default AuthLayout;