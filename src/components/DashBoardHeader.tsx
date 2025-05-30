import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import SearchBar from "./ui/SearchBar";
import { useState } from "react";

function DashBoardHeader() {

    const { t } = useTranslation();
    const [searchValue,setSearchValue ] = useState("")

    return (
        <div className="w-full h-24 border-b-2 flex px-8 border-usual_light_purple items-center justify-between">
            <p>{ t("greeting") } Wilfried</p>
            <SearchBar handleChange={setSearchValue} value={searchValue} />
            <LanguageSelector />
        </div>
    )
}

export default DashBoardHeader;
