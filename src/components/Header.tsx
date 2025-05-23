import { useTranslation } from "react-i18next";
import LogoSourcing from "/logo/sourcing_logo.svg";
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
        <>
            <div className="w-full">
                <div data-canbetest="true" className="flex items-center justify-between md:h-[13vh] p-3 max-md:flex-col max-md:gap-5">
                    <div className='flex items-center hover:cursor-pointer' onClick={redirectHome}>
                        <div className='w-25'>
                            <img src={LogoSourcing} alt="sourcing_logo"/> 
                        </div>
                        <p className="text-primary text-3xl max-phone:text-xl font-bold">
                            Sourcing
                        </p>
                    </div>
                    <div className="flex gap-1.5 max-md:flex-col max-md:gap-3">
                        <button 
                            className="text-primary text-lg border rounded-lg bg-white hover:cursor-pointer pl-5 pr-5 p-2 shadow-lg max-phone:text-sm"
                            onClick={redirectLogin}
                        >
                            {t("connect")}
                        </button>
                        <button
                            className="text-white text-lg border rounded-lg bg-primary hover:cursor-pointer pl-5 pr-5 p-2 shadow-lg max-phone:text-sm"
                            onClick={redirectRegistration}
                        >
                            {t("rejoin")}
                        </button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Header;