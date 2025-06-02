import search from "/icons/search.svg"
import { useTranslation } from "react-i18next";

function SearchBar( { handleChange, value } : { handleChange: (e: string) => void; value: string; } ) {

    const { t } = useTranslation();

    return (
        <div className="flex items-center w-fit border h-10 rounded-md border-gray-400 px-4">
            <input value={value} onChange={(e) => handleChange(e.target.value)} className="h-full outline-none" type="text" placeholder={t("search")} />
            <img src={search} alt="search" />
        </div>
    )
}

export default SearchBar;