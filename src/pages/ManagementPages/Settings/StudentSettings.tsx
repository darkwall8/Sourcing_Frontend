import { useTranslation } from "react-i18next";
import Toggle from "../../../components/ui/Toggle.tsx";
import settings_icon from "/icons/settings.svg";
import {useState} from "react";
import Popup from "../../../components/common/PopUp.tsx";
import Tag from "../../../components/ui/Tag.tsx";

function StudentSettings() {

    const { t } = useTranslation();
    const domainList= [
        {title: "Developpement Fullstack", isSelected: false},
        {title: "Devops"},
        {title: "Cyber Sécurité"},
        {title: "Administration Réseaux"},
        {title: "Administration système"}
    ];
    const [popupDisplay, setPopupDisplay] = useState<boolean>(false);
    const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
    const [notificationProfrile, setnotificationProfrile] = useState<boolean>(true);
    const [notificationNouveaute, setNotificationNouveaute] = useState<boolean>(true);
    const [visibilite, setVisibilite] = useState<boolean>(true);

    return (
        <div className={"bg-white m-2 rounded-3xl h-full p-5 space-y-10"}>
            <div className={"flex items-center justify-center flex-col mt-5 text-lg"}>
                <div className={"flex items-center justify-center w-90 gap-1 border border-primary rounded p-2 "}>
                    <img src={settings_icon} alt="icon settings"
                         className={"w-6"}
                    />
                    <p className={"text-primary font-bold"}>PARAMETRES GENERAUX</p>
                </div>
                <div className={"w-62 border-3 rounded border-primary -mt-1.5"}></div>
            </div>

            <div className={"m-auto flex items-center flex-col gap-4 w-200 p-5 text-sm"}>
                <div className={"flex items-center justify-between w-full gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting1")}</span>
                    <div> <Toggle value={notificationProfrile} onChange={setnotificationProfrile}/> </div>
                </div>
                <div className={"w-70 border border-gray-200"}></div>
                <div className={"flex items-center justify-between w-full gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting2")}</span>
                    <div className="flex w-70 p-1 h-25 flex-wrap items-start overflow-y-auto">
                        {selectedDomains.map((domainTitle) => (
                            <span
                                key={domainTitle}
                                className="bg-primary text-white p-2 rounded w-fit h-fit flex items-center gap-1 m-1"
                            >
                                {domainTitle}
                            </span>
                        ))}
                    </div>
                    <div className={"h-5 w-7 bg-primary justify-center items-center flex rounded "}>
                        <div
                            className={"h-5 w-7 bg-primary justify-center items-center flex rounded hover:cursor-pointer hover:bg-[#0085af]"}
                            onClick={() => setPopupDisplay(true)}
                        >
                            <span className={"text-white"}> + </span>
                        </div>
                    </div>
                </div>
                <div className={"w-70 border border-gray-200"}></div>
                <div className={"flex items-center justify-between w-full gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting3")}</span>
                    <div> <Toggle value={notificationNouveaute} onChange={setNotificationNouveaute}/> </div>
                </div>
                <div className={"w-70 border border-gray-200"}></div>
                <div className={"flex items-center justify-between w-full gap-10 h-20"}>
                    <span>{t("dashboard.student_settings.setting4")}</span>
                    <div> <Toggle value={visibilite} onChange={setVisibilite}/> </div>
                </div>
            </div>

            <div className={"flex items-center justify-center flex-col text-sm"}>
                <Popup isDisplayed={popupDisplay} onDisplayChange={setPopupDisplay}>
                    <div className="">
                        <div className={"m-1 flex items-center -mt-3 p-2 w-64 overflow-x-scroll"}>
                            <div className={"flex gap-1"}>
                                {selectedDomains.map((domainTitle) => (
                                    <Tag label={domainTitle} isCloseButton={true} onClick={() => setSelectedDomains(selectedDomains.filter(title => title !== domainTitle))} />
                                ))}
                            </div>
                        </div>
                        <div className={"w-70 border border-gray-200 flex m-auto mt-2 mb-2 justify-center"}></div>
                        <div className="h-40 overflow-auto">
                            {domainList.map((domain) => (
                                <div
                                    key={domain.title}
                                    onClick={() => {
                                        if (!selectedDomains.includes(domain.title)) {
                                            setSelectedDomains([...selectedDomains, domain.title]);
                                        }
                                    }}
                                >
                                    <div className={"text-white"}>
                                        <p
                                            className={`bg-primary p-2 m-1 rounded w-fit hover:cursor-pointer hover:bg-[#0085af] ${
                                                selectedDomains.includes(domain.title) ? "opacity-50 cursor-not-allowed" : ""
                                            }`}
                                        >
                                            {domain.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={"w-70 border border-gray-200 flex m-auto mt-2 mb-2 justify-center"}></div>
                        <div className="flex items-center justify-center -mb-8">
                            <button
                                className={"bg-primary text-white p-2 rounded w-fit pr-5 pl-5 hover:bg-[#0085af] hover:cursor-pointer"}
                                onClick={() => setPopupDisplay(false)}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>

        </div>
    )
}

export default StudentSettings;