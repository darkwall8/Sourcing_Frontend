import cross from "/icons/cross.svg"
import React, { useEffect, useState } from "react";

type PopupProps = {
  isDisplayed?: boolean;
  onDisplayChange?: (isDisplayed: boolean) => void;
  children?: React.ReactNode;
};

function Popup({ isDisplayed = false, onDisplayChange, children } : PopupProps) {
  const [displayPopUp, setDisplayPopUp] = useState(isDisplayed);

  useEffect(() => {
    setDisplayPopUp(isDisplayed);
  }, [isDisplayed]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDisplayPopUp(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (displayPopUp) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
    onDisplayChange?.(displayPopUp);
  }, [displayPopUp, onDisplayChange]);

  return (
    <div
      className={`fixed z-50 top-0 left-0 flex justify-center items-center overflow-hidden w-screen transition-all duration-150 ease-in-out popup ${
        displayPopUp ? "scale-100" : "scale-0"
      }`}
    >
      <div
        className="fixed bg-black/10 backdrop-blur-sm w-screen h-screen top-0 left-0 flex justify-center items-center transition-all duration-150 ease-in-out"
        onClick={() => setDisplayPopUp(false)}
      ></div>

      <div className="w-full overflow-scroll flex items-center justify-center h-screen z-10">
        <div className="bg-white p-8 overflow-visible w-fit relative z-10 flex flex-col items-end rounded-lg">
            <div className="w-full absolute top-0 right-0 flex justify-end pr-4 pt-4">
              <img onClick={() => setDisplayPopUp(false)} src={cross} alt="cross" className="cursor-pointer" />
            </div>

            <div>
              <div className="w-full px-8 py-4">{children}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;