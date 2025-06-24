// import Chart from 'chart.js/auto';
import more from "/icons/more.svg"
import {useTranslation} from "react-i18next";
import DataTable, {HeaderColumn} from "./DataTable";

function RecentCandidature() {
    const { t } = useTranslation();
    const Header: HeaderColumn[] = [
        {key: "Name", label: t("dashboard.student_dashboard.key_name"), type: "string"},
        {key: "Probability", label: t("dashboard.student_dashboard.key_probability"), type: "string"},
        {key: "Post", label: t("dashboard.student_dashboard.key_post"), type: "string"},
        {key: "Date", label: t("dashboard.student_dashboard.key_date"), type: "string"},
    ]

    const enterpriseList = [
        {Name: "Camrail", Probability: "17,5%", Post: "DevOps", Date: "24.Jan.2021"},
        {Name: "Orange", Probability: "10,8%", Post: "Admin système", Date: "12.Jun.2021"},
        {Name: "Interface", Probability: "21,3%", Post: "Dev junior", Date: "05.Jan.2021"},
        {Name: "HAVAS", Probability: "31,5%", Post: "Support IT", Date: "07.Mar.2021"},
        {Name: "Carrefour", Probability: "12,2%", Post: "Consultant IT", Date: "21.Dec.2021"}
    ]

    return(
        <>
            <div className={"bg-white rounded-2xl shadow-md"}>
                <div className="flex items-center justify-between p-3 pb-1">
                    <h1 className="text-[#2B3674] font-medium text-lg">Candidature Recente</h1>
                    <div>
                        <img src={more} alt="more"/>
                    </div>
                </div>
                <div className="overflow-y-auto">
                    <DataTable headers={Header} data={enterpriseList} title={""}/>
                </div>
            </div>
        </>
    )
}

export default RecentCandidature