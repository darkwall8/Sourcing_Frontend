import { useTranslation } from "react-i18next";
import DataTable, { HeaderColumn } from "./components/DataTable";
import { useState } from "react";
import Popup from "../../../components/common/PopUp";

function CompaniesList() {

    const { t } = useTranslation();
    const [isDisplayPopUp, setIsDisplayPopUp] = useState(false);
    const headers: HeaderColumn[] = [
        { key: "name", label: t("dashboard.datalist.company_name"), type: "string", searchable: true },
        { key: "domain", label: t("dashboard.datalist.company_domain"), type: "string", searchable: true },
        { key: "phone", label: t("dashboard.datalist.company_phone"), type: "string", searchable: false },
        { key: "email", label: t("dashboard.datalist.company_email"), type: "string", searchable: true },
        { key: "country", label: t("dashboard.datalist.company_country"), type: "string", searchable: true },
        { key: "is_intern_search", label: t("dashboard.datalist.is_intern_search"), type: "boolean", searchable: false },
    ];

    const data = [
        {
            id: 1,
            name: "Microsoft",
            domain: "IT",
            phone: "(225) 555-0118",
            email: "microsoft@microsoft.com",
            country: "United States",
            is_intern_search: true,
        },
        {
            id: 2,
            name: "Apple",
            domain: "Telephonie",
            phone: "(205) 555-0100",
            email: "apple@apple.com",
            country: "United States",
            is_intern_search: false,
        }
    ];

    function onClickRow(rowId: number | string) {
        setIsDisplayPopUp(true);
        console.log(rowId);
    }

    return (
        <div className="w-full h-full">
            <DataTable onClickRow={onClickRow} title={t("dashboard.datalist.company_list")} headers={headers} data={data} />
            <Popup isDisplayed={isDisplayPopUp} onDisplayChange={setIsDisplayPopUp}>
                Company card
            </Popup>
        </div>
    )
}

export default CompaniesList;