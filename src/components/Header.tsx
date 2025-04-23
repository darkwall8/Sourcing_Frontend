import { useTranslation } from "react-i18next";
import LogoSourcing from "/logo/sourcing_logo.svg"
// import LanguageSelector from "./LanguageSelector";

function Header(){

    const { t } = useTranslation();

    return (
        
        <div className="flex flex-row items-center justify-between mt-4 m-5">
            <div className='flex items-center'>
                <div className='w-20'>
                    <img src={LogoSourcing} alt="sourcing_logo"/> 
                </div>
                <p className="text-primary text-2xl">
                    Sourcing
                </p>
            </div>
            <div className="flex gap-1.5">
                <button className="text-primary border rounded-md bg-white h-9 w-36 hover:cursor-pointer hover:bg-primary hover:text-white">
                    {t("connect")}
                </button>
                <button className="text-white border rounded-md bg-primary h-9 w-36 hover:cursor-pointer hover:bg-white hover:text-primary">
                    {t("rejoin")}
                </button>
            </div>
        </div>
        
    )
}

export default Header;