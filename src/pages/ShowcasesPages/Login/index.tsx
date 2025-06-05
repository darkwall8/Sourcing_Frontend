import logo from "/logo/sourcing_logo.svg";
import emailIcon from "/icons/email.svg";
import check from "/icons/check.svg";
import passwordIcon from "/icons/password.svg";
import icon1 from "/icons/great.svg";
import icon2 from "/icons/tower.svg";
import icon3 from "/icons/diplomas.svg";
import icon4 from "/icons/world.svg";
import quaterWorld from "/icons/quater_world.svg"
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Login() {

    const { t } = useTranslation();
    const [isRememberActivated, setIsRememberActivated] = useState(false);

    function updateCheckStatut() {
        if(isRememberActivated) {
            setIsRememberActivated(false);
        } else {
            setIsRememberActivated(true)
        }
    }

    return (
        <div className="relative flex justify-center md:justify-end md:pr-32 items-center bg-primary w-screen h-screen overflow-hidden" data-canbetest="true">
            <div className="flex items-end absolute pl-18 pb-10 -left-18 -top-42 w-64 h-64 bg-white rounded-full">
                <NavLink to={"/"} className="flex items-center relative z-30">
                    <img className="w-16" src={logo} alt="logo" />
                    <p className="font-semibold text-xl text-primary">Sourcing</p>
                </NavLink>
            </div>
            <div className="relative md:border-2 md:border-white rounded-full text-xs md:text-base md:p-16">
                <div className="hidden w-32 h-32 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -top-0 -left-0 rounded-full"><img className="w-16 h-16" src={icon1} alt="icon1" /></div>
                <div className="hidden w-32 h-32 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -top-0 -right-0 rounded-full"><img className="w-16 h-16" src={icon2} alt="icon2" /></div>
                <div className="hidden w-32 h-32 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -bottom-0 -left-0 rounded-full"><img className="w-16 h-16" src={icon3} alt="icon3" /></div>
                <div className="hidden w-32 h-32 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -bottom-0 -right-2 rounded-full"><img className="w-16 h-16" src={icon4} alt="icon4" /></div>
                {/*  */}
                <div className="bg-white rounded-2xl p-8 flex flex-col gap-8 relative z-30">
                    <img className="absolute -bottom-0 right-0 w-12" src={quaterWorld} alt="icon4" />
                    <p className="text-primary text-3xl font-semibold text-center">{t("login.sign_in")}</p>
                    <form className="flex flex-col gap-4" action="">
                        <div className="w-full flex gap-4">
                            <img className="w-8 h-8" src={emailIcon} alt="mail" />
                            <input className="border rounded-md h-8 border-gray-400 outline-primary pl-4" type="email" placeholder={t("login.email_placeholder")} />
                        </div>
                        <div className="w-full flex gap-4">
                            <img className="w-8 h-8" src={passwordIcon} alt="password" />
                            <input className="border rounded-md h-8 border-gray-400 outline-primary pl-4" type="password" placeholder={t("login.password_placeholder")} />
                        </div>
                        <div className="bg-primary h-10 flex justify-center items-center rounded-md shadow-md text-white font-semibold cursor-pointer hover:bg-primary/80 transition-all duration-150 ease-in-out">{t("login.login")}</div>
                    </form>
                    <div className="">
                        <div className="flex items-center gap-4">
                            <p>{t("login.remember_me")}</p>
                            <div onClick={() => updateCheckStatut()} className={`${!isRememberActivated ? "bg-primary" : "bg-white border-2"} w-6 h-6 cursor-pointer flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}>
                                <img src={check} alt="check" />
                            </div>
                        </div>
                        <div className="font-semibold">{t("login.no_account")} <NavLink to={"/registration"} className="text-primary">{t("login.create_one")}</NavLink></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;