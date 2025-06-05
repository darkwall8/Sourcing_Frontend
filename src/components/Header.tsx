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
            <div className="w-full text-xs md:text-base">
                <div data-canbetest="true" className="sticky top-0 z-20 w-full py-1 flex items-center justify-between p-3 max-md:flex-col max-md:gap-5">
                    <div className='flex items-center hover:cursor-pointer' onClick={redirectHome}>
                        <div className='lg:w-25 md:w-22.5 w-10'>
                            <img src={LogoSourcing} alt="sourcing_logo"/>
                        </div>
                        <p className="text-primary text-lg md:text-xl lg:text-3xl font-bold">
                            Sourcing
                        </p>
                    </div>
                    <div className="flex gap-1.5 max-md:flex-col max-md:gap-3">
                        <button 
                            className="text-primary lg:text-lg border rounded-lg bg-white hover:cursor-pointer pl-5 pr-5 p-2 shadow-lg max-phone:text-sm"
                            onClick={redirectLogin}
                        >
                            {t("connect")}
                        </button>
                        <button
                            className="text-white lg:text-lg border rounded-lg bg-primary hover:cursor-pointer pl-5 pr-5 p-2 shadow-lg max-phone:text-sm"
                            onClick={redirectRegistration}
                        >
                            {t("rejoint")}
                        </button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Header;