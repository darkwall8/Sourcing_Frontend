import {useState} from "react";
import PieChart from "./PieChart.tsx";

function StageDomain() {
    type Period = { id: number; name: string };
    const periods: Period[] = [
        {name:"Daily", id: 1},
        {name:"Weekly", id: 2},
        {name:"Monthly", id: 3}
    ]
    const [selectedPeriod, setSelectedPeriod] = useState<string>('Monthly');

    return(
        <div className={"bg-white rounded-2xl shadow-md p-3"}>
            <div className={"flex justify-between items-center mb-5.5"}>
                <p className={"text-[#2B3674] font-medium max-lg:text-sm"}>Stage Domain</p>
                <div className={"text-[#A3AED0] text-xs border-none"}>
                    <select className={"w-17 outline-none"} value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
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