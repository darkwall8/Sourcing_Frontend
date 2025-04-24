import { useTranslation } from "react-i18next";
import LogoSourcing from "/logo/sourcing_logo.svg"
import { useNavigate } from "react-router-dom";

function Header(){

    const { t } = useTranslation();
    const navigate= useNavigate();
    let path

    function redirectHome() {
        path= "/"
        navigate(path)
    }

    function redirectLogin(){
        path= "/login"
        navigate(path)
    }

    function redirectRegistration(){
        path="/registration"
        navigate(path)
    }

    return (
        <div data-canbetest="true" className=" flex items-center justify-between mt-4 m-5 hover:cursor-pointer max-sm:flex-col max-sm:gap-3">
            <div className='flex items-center' onClick={redirectHome}>
                <div className='w-20 max-phone:w-15'>
                    <img src={LogoSourcing} alt="sourcing_logo"/> 
                </div>
                <p className="text-primary text-2xl max-phone:text-xl">
                    Sourcing
                </p>
            </div>
            <div className="flex gap-1.5 max-sm:flex-col">
                <button 
                    className="text-primary border rounded-lg bg-white hover:cursor-pointer pl-5 pr-5 p-2 shadow-lg max-phone:text-sm"
                    onClick={redirectLogin}
                >
                    {t("connect")}
                </button>
                <button
                    className="text-white border rounded-lg bg-primary hover:cursor-pointer pl-5 pr-5 p-2 shadow-lg max-phone:text-sm"
                    onClick={redirectRegistration}
                >
                    {t("rejoin")}
                </button>
            </div>
        </div> 
    )
}

export default Header;