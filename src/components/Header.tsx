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
        <div data-canbetest="true" className="w-full flex items-center justify-between mt-4 m-5 hover:cursor-pointer max-sm:flex-col max-sm:gap-3">
            <div className='flex items-center' onClick={redirectHome}>
                <div className='w-20 max-phone:w-15'>
                    <img src={LogoSourcing} alt="sourcing_logo"/> 
                </div>
                <p className="text-primary text-2xl max-phone:text-xl font-bold">
                    Sourcing
                </p>
            </div>
        </>
    )
}

export default Header;