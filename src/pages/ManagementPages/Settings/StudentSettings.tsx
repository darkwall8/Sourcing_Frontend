import { useTranslation } from "react-i18next";
import Toggle from "../../../components/ui/Toggle.tsx";
import settings_icon from "/icons/settings.svg"

function StudentSettings() {

    const { t } = useTranslation();

    return (
        <div className={"bg-white m-2 rounded-3xl h-full p-5 space-y-10 text-sm"}>
            <div className={"flex items-center justify-center flex-col mt-5"}>
                <div className={"flex items-center justify-center w-90 gap-1 border border-primary rounded p-2 "}>
                    <img src={settings_icon} alt="icon settings"
                         className={"w-6"}
                    />
                    <p className={"text-primary font-bold"}>PARAMETRES GENERAUX</p>
                </div>
                <div className={"w-40 border-2 rounded border-primary"}></div>
            </div>

            <div className={"flex items-center justify-center flex-col gap-4"}>
                <div className={"flex items-center gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting1")}</span>
                    <div> <Toggle/> </div>
                </div>
                <div className={"w-70 border border-gray-200"}></div>
                <div className={"flex items-center gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting2")}</span>
                    <div className={"h-5 w-7 bg-primary justify-center items-center flex rounded "}>
                        <span className={"text-white"}> + </span>
                    </div>
                </div>
                <div className={"w-70 border border-gray-200"}></div>
                <div className={"flex items-center gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting3")}</span>
                    <div> <Toggle/> </div>
                </div>
                <div className={"w-70 border border-gray-200"}></div>
                <div className={"flex items-center gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting4")}</span>
                    <div> <Toggle/> </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSettings;