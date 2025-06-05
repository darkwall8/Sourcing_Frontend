import { Outlet } from "react-router-dom";
import feedback from "/icons/feedback.svg";
import NavBar from "../NavBar";
import DashBoardHeader from "../DashBoardHeader";
import Popup from "../common/PopUp";
import FeedBack from "../common/FeedBack";
import { useState } from "react";

function AuthLayout() {
  const [isDisplayFeed, setIsDisplayFeedback] = useState(false);

  return (
    <div className="w-screen flex h-screen overflow-hidden">
      <div className="w-fit">
        <NavBar />
      </div>
      <main className="w-full overflow-hidden min-h-screen pb-4 bg-usual_gray">
        <div className="h-fit">
          <DashBoardHeader />
        </div>
        <div className="relative h-11/12">
          <Outlet />
          <div
            onClick={() => setIsDisplayFeedback(true)}
            className="absolute bg-white bottom-5 cursor-pointer rounded-md px-4 h-10 left-5 gap-2 flex items-center border hover:shadow-lg hover:shadow-primary/50 transition-all duration-150 ease-in-out border-gray-400"
          >
            <img src={feedback} alt="feedback" />
            <p>Feedback</p>
          </div>
        </div>
      </main>
      <Popup isDisplayed={isDisplayFeed} onDisplayChange={setIsDisplayFeedback}>
        <FeedBack />
      </Popup>
    </div>
  );
}

export default AuthLayout;
