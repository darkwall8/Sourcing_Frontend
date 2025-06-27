import logo from "/logo/sourcing_logo.svg";
import emailIcon from "/icons/email.svg";
import check from "/icons/check.svg";
import passwordIcon from "/icons/password.svg";
import icon1 from "/icons/great.svg";
import icon2 from "/icons/tower.svg";
import icon3 from "/icons/diplomas.svg";
import icon4 from "/icons/world.svg";
import quaterWorld from "/icons/quater_world.svg";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../../utils/API";
import { LocalStorageManager } from "../../../utils/functions/LocalStorageManager";
import { useAuth } from "../../../utils/Context/AuthContext";


function Login() {
    const { t } = useTranslation();
    const api = new API();
    const naviguate = useNavigate();
    const { login } = useAuth();

    const [isRememberActivated, setIsRememberActivated] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const updateCheckStatut = () => {
        setIsRememberActivated(prev => !prev);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (!email || !password) {
            setError(t("login.missing_fields") || "Veuillez remplir tous les champs.");
            return;
        }

        api.postData(
            `${api.authUrl}/api/auth/login`,
            {
                email,
                password
                // remember: isRememberActivated
            },
            false
        ).then((res) => {
            setSuccess(t("login.success_message") || "Connexion réussie !");
            //   TO DO
            console.log("Login response:", res);
            LocalStorageManager.setItem("userToken", res.token);
            login();
            alert("Connexion reussite")
            naviguate("/dashboard")
        }).catch((err) => {
            throw new Error(err)
        })
    };

    return (
        <div className="relative flex justify-center items-center bg-primary w-screen h-screen overflow-hidden" data-canbetest="true">
            <div className="flex items-end absolute pl-18 pb-10 -left-18 -top-42 w-64 h-64 bg-white rounded-full">
                <NavLink to="/" className="flex items-center relative z-30">
                    <img className="w-16" src={logo} alt="logo" />
                    <p className="font-semibold text-xl text-primary">Sourcing</p>
                </NavLink>
            </div>

            <div className="relative w-full md:w-fit h-fit md:p-24 flex justify-center items-center md:border-2 md:border-white md:rounded-full text-xs md:text-base">
                <div className="hidden w-48 h-48 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -top-0 -left-0 rounded-full"><img className="w-28 h-28" src={icon1} alt="icon1" /></div>
                <div className="hidden w-48 h-48 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -top-0 -right-0 rounded-full"><img className="w-28 h-28" src={icon2} alt="icon2" /></div>
                <div className="hidden w-48 h-48 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -bottom-0 -left-0 rounded-full"><img className="w-28 h-28" src={icon3} alt="icon3" /></div>
                <div className="hidden w-48 h-48 border-2 z-20 bg-primary border-white md:flex items-center justify-center absolute -bottom-0 -right-2 rounded-full"><img className="w-28 h-28" src={icon4} alt="icon4" /></div>

                <div className="bg-white px-8 py-24 md:py-8 w-full h-fit md:w-[450px] md:h-[450px] md:rounded-2xl md:p-8 flex flex-col justify-between items-center gap-8 relative z-30">
                    <div className="flex flex-col w-fit gap-8 justify-between h-full">
                        <img className="absolute -bottom-0 right-0 w-12" src={quaterWorld} alt="icon4" />
                        <p className="text-primary text-3xl font-semibold text-center">{t("login.sign_in")}</p>

                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

                        <form className="flex flex-col gap-4 w-fit" onSubmit={handleSubmit}>
                            <div className="w-full flex gap-4">
                                <img className="w-8 h-8" src={emailIcon} alt="mail" />
                                <input
                                    className="border rounded-md h-10 w-full border-gray-400 outline-primary pl-4"
                                    type="email"
                                    placeholder={t("login.email_placeholder")}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="w-full flex gap-4">
                                <img className="w-8 h-8" src={passwordIcon} alt="password" />
                                <input
                                    className="border rounded-md h-10 w-full border-gray-400 outline-primary pl-4"
                                    type="password"
                                    placeholder={t("login.password_placeholder")}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary h-10 flex justify-center items-center rounded-md shadow-md text-white font-semibold cursor-pointer hover:bg-primary/80 transition-all duration-150 ease-in-out"
                            >
                                {t("login.login")}
                            </button>
                        </form>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <p>{t("login.remember_me")}</p>
                                <div
                                    onClick={updateCheckStatut}
                                    className={`${isRememberActivated ? "bg-primary" : "bg-white border-2"} w-6 h-6 cursor-pointer flex items-center justify-center rounded-md transition-all duration-150 ease-in-out`}
                                >
                                    {isRememberActivated && <img src={check} alt="check" />}
                                </div>
                            </div>
                            <div>
                                {t("login.no_account")} <NavLink to="/registration" className="text-primary font-semibold">{t("login.create_one")}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
