import dollars from "/icons/dollars.svg"
import stat from "/icons/Stat.svg"
import file from "/icons/File.svg"
import { useTranslation } from "react-i18next";

function ComplementInformation() {

    const { t } = useTranslation();

    return(
        <>
            <div className={"bg-white rounded-2xl shadow-md xl:p-3.5 max-md:p-3 p-2 flex items-center gap-4 "}>
                <div className={"w-10 h-10"}>
                    <img src={dollars} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-[10px] 2xl:text-base"}> {t("dashboard.student_dashboard.other_information.title1")} </p>
                    <p className={"text-[#2B3674] font-semibold xl:text-xl 2xl:text-3xl"}>15</p>
                </div>
            </div>
            <div className={"bg-white rounded-2xl shadow-md xl:p-3.5 max-md:p-3 p-2 mt-3 mb-3 flex items-center gap-4"}>
                <div className={"w-10 h-10"}>
                    <img src={stat} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-[10px] 2xl:text-base"}>{t("dashboard.student_dashboard.other_information.title2")}</p>
                    <p className={"text-[#2B3674] font-semibold xl:text-xl 2xl:text-3xl"}>8</p>
                </div>
            </div>
            <div className={"bg-white rounded-2xl shadow-md xl:p-3.5 max-md:p-3 p-2 mt-3 flex items-center gap-4"}>
                <div className={"w-10 h-10"}>
                    <img src={file} alt=""/>
                </div>
                <div>
                    <p className={"text-[#A3AED0] text-[10px] 2xl:text-base"}>{t("dashboard.student_dashboard.other_information.title3")}</p>
                    <p className={"text-[#2B3674] font-semibold xl:text-xl 2xl:text-3xl"}>25</p>
                </div>
            </div>
        </>
    )
}

export default ComplementInformation