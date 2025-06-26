import {useState} from "react";
import PieChart from "./PieChart.tsx";
import {useTranslation} from "react-i18next";

function StageDomain() {

    const {t} = useTranslation();

    type Period = { id: number; name: string };
    const periods: Period[] = [
        {name: t("dashboard.student_dashboard.stage_domain.period.day"), id: 1},
        {name:t("dashboard.student_dashboard.stage_domain.period.week"), id: 2},
        {name:t("dashboard.student_dashboard.stage_domain.period.month"), id: 3}
    ]
    const [selectedPeriod, setSelectedPeriod] = useState<string>('Monthly');

    return(
        <div className={"bg-white rounded-2xl shadow-md p-3"}>
            <div className={"flex justify-between items-center mb-5.5"}>
                <p className={"text-[#2B3674] font-medium max-lg:text-sm"}>{t("dashboard.student_dashboard.stage_domain.title")}</p>
                <div className={"text-[#A3AED0] text-xs border-none"}>
                    <select className={"w-fit outline-none"} value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
                        {periods.map((p) => (
                            <option key={p.id} value={p.name}>
                                {p.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={"flex justify-center items-center"}>
                <PieChart/>
            </div>
        </div>
    )
}

export default StageDomain