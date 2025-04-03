import { useTranslation } from "react-i18next";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSelector from "./LanguageSelector";
import SearchBar from "./ui/SearchBar";

function DashBoardHeader() {

    const { t } = useTranslation();

    return (
        <div className="w-full h-24 border-b flex !px-32 border-gray-300 items-center justify-between">
            <p>{ t("greeting") } Wilfried</p>
            <SearchBar />
            <DarkModeToggle />
            <LanguageSelector />
        </div>
    )
}

export default DashBoardHeader;
