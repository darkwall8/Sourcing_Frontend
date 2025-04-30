import { useTranslation } from "react-i18next";
import  Check  from "/icons/check.svg";
import HomeCompany from "/images/home_company_image.svg";
import HomeStudent from "/images/home_student_image.svg";
import IconCompany from "/icons/company.svg";
import IconHappy from "/icons/happy.svg";
import IconVector from "/icons/Vector-2.svg";
import IconStudent from "/icons/students.svg";
import IconSchool from "/icons/school.svg";

function Home(){
    const { t } = useTranslation();

    return (
        <>
            <div id="enterprise" className="h-[83vh] space-y-20 p-5">
                <div id="enterprise_presentation" className="flex justify-center space-x-50">
                    <div className="w-115">
                        <img src={HomeCompany} alt="Company Image" />
                    </div>
                    <div id="enterprise_text" className="flex flex-col gap-7 w-150">
                        <div className="flex flex-col gap-7">
                            <p className="text-4xl font-bold"> {t("enterprise.question")} </p>
                            <p className="text-2xl"> {t("enterprise.intro")} </p>
                        </div>
                        <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-full bg-primary p-2 w-10 h-10"
                                    alt="Check" 
                                />
                                {t("enterprise.list1")}
                            </div>
                            <div className="flex items-center  gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-2 w-10 h-10"
                                    alt="Check" 
                                />
                                {t("enterprise.list2")}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-2 w-10 h-10"
                                    alt="Check" 
                                />
                                {t("enterprise.list3")}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="enterprise_comment" className="flex justify-between ">
                    <div className="flex items-center gap-1.5">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconCompany} alt="Icon company" className=""/>
                        </div>
                        <div className="w-75">
                            <p className="text-2xl font-bold"> 90 </p>
                            <p> {t("enterprise.text1")} </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconHappy} alt="Icon happy" />
                        </div>
                        <div className="w-75">
                            <p className="text-2xl font-bold"> 100% </p>
                            <p> {t("enterprise.text2")} </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconVector} alt="Icon vector" />
                        </div>
                        <div className="w-75">
                            <p className="text-2xl font-bold"> 80% </p>
                            <p> {t("enterprise.text3")} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="student" className="h-[83vh] space-y-20 p-5">
                <div id="student_presentation" className="flex justify-center space-x-40">
                    <div id="student_text" className="flex flex-col gap-7 w-170">
                        <div className="flex flex-col gap-7">
                            <p className="text-4xl font-bold"> {t("student.question")} </p>
                            <p className="text-2xl"> {t("student.intro")} </p>
                        </div>
                        <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-full bg-primary p-2 w-10 h-10"
                                    alt="Check" 
                                />
                                {t("student.list1")}
                            </div>
                            <div className="flex items-center  gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-2 w-10 h-10"
                                    alt="Check" 
                                />
                                {t("student.list2")}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-2 w-10 h-10"
                                    alt="Check" 
                                />
                                {t("student.list3")}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-2 w-10 h-10"
                                    alt="Check" 
                                />
                                {t("student.list4")}
                            </div>
                        </div>
                    </div>
                    <div className="w-102">
                        <img src={HomeStudent} alt="Company Image" />
                    </div>
                </div>
                <div id="student_comment" className="flex justify-between ">
                    <div className="flex items-center gap-1.5">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconStudent} alt="Icon company" className=""/>
                        </div>
                        <div className="w-75">
                            <p className="text-2xl font-bold"> 1300 </p>
                            <p> {t("student.text1")} </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconHappy} alt="Icon happy" />
                        </div>
                        <div className="w-75">
                            <p className="text-2xl font-bold"> 100% </p>
                            <p> {t("student.text2")} </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconSchool} alt="Icon vector" />
                        </div>
                        <div className="w-75">
                            <p className="text-2xl font-bold"> 80% </p>
                            <p> {t("student.text3")} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;