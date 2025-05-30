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
        <div className="w-full flex h-screen overflow-hidden">
            <NavBar />
            <main className="w-full min-h-screen pb-4 bg-usual_gray">
                <DashBoardHeader />
                <Outlet />
            </main>
            <Popup isDisplayed={isDisplayFeed} onDisplayChange={setIsDisplayFeedback} >
                <FeedBack />
            </Popup>
            <div onClick={() => setIsDisplayFeedback(true)} className="absolute bottom-5 cursor-pointer rounded-md px-4 h-10 right-5 gap-2 flex items-center border-2 hover:bg-primary/5 border-gray-400">
                <img src={feedback} alt="feedback" />
                <p>Feedback</p>
            </div>
        </div>
    )
}

export default AuthLayout;