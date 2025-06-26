import agl from "/images/agl.jpeg";
// import drop_up from "/icons/arrow_drop_up.svg";
// import drop_down from "/icons/arrow_drop_down.svg";
import BarChart from "./BarChart";
import { useTranslation } from "react-i18next";


function MostAccessibleCompany() {

    const { t } = useTranslation();

    return(
        <div className={"h-full"}>
            <div className={"flex flex-col pb-2"}>
                <div className="flex justify-between items-center">
                    <p className={"text-[#A3AED0] text-xs"}> {t("dashboard.student_dashboard.Accessible_company.title")} </p>
                    <div className={"flex"}>
                        <div className="flex items-center gap-1">
                            {/* {""="" ? (
                                    <div>
                                        <img src={drop_up} alt="" className={"w-5 h-5"}/>
                                    </div>
                                ):(
                                    <div>
                                        <img src={drop_down} alt="" className={"w-5 h-5"}/>
                                    </div>
                                )
                            } */}
                            <p className={"text-[#05CD99] text-xs font-semibold"}> + 2,4%</p>
                        </div>
                        <div className={"w-15"}>
                            <img src={agl} alt="" className={"rounded-circle"}/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10">
                    <p className="text-xl text-[#2B3674] font-bold">95</p>
                    <p className="text-xs text-[#A3AED0] mt-2">{t("dashboard.student_dashboard.Accessible_company.under_title")} </p>
                </div>
            </div>
            <div className=" lg:w-85 xl:w-full max-lg:w-70 h-full">
                <BarChart/>
            </div>
        </div>
    )
}

export default MostAccessibleCompany