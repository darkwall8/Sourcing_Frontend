import studentIcon from "/icons/students.svg"
import companyIcon from "/icons/company.svg"
import { useTranslation } from "react-i18next";
import { useState } from "react";
import StudentRegistration from "./StudentRegistration/StudentRegistration";
import CompanyRegistration from "./CompanyRegistration/CompanyRegistration";

function Registration(){

    const { t } = useTranslation();
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [formToDisplay, setFormToDisplay] = useState(0);

    function selectRegistration(form: number) {
        setFormToDisplay(form);
        setIsDisplayForm(true);
    }

    return (
        <>
            {
                !isDisplayForm ? (
                    <div className="flex flex-col px-8 md:py-32 md:h-full md:px-64" data-canbetest="true">
                        <p className="w-full font-semibold text-2xl md:text-5xl">{t("student_registration.welcome")} <span className="text-primary">Sourcing</span></p>
                        <div className="flex flex-col md:flex-row gap-2 w-full h-full">
                            <div className="w-full h-full flex flex-col gap-y-8 items-center justify-between py-8 rounded-xl bg-primary">
                                <p className="text-2xl text-white w-64 text-center font-semibold">{t("student_registration.register_as_a_student")}</p>
                                <div className="bg-white rounded-full flex items-center justify-center p-8">
                                    <img className="w-10 h-10" src={studentIcon} alt="student_icon" />
                                </div>
                                <div onClick={() => selectRegistration(0)} className="bg-white px-8 cursor-pointer text-primary font-semibold xl py-2 rounded-md transition-all duration-150 ease-in-out">{t("continue")}</div>
                            </div>
                            {/*  */}
                            <div className="w-full h-full flex flex-col gap-y-8 items-center justify-between py-8 rounded-xl bg-primary">
                                <p className="text-2xl text-white w-64 text-center font-semibold">{t("student_registration.register_as_a_company")}</p>
                                <div className="bg-white rounded-full flex items-center justify-center p-8">
                                    <img className="w-10 h-10" src={companyIcon} alt="student_icon" />
                                </div>
                                <div onClick={() => selectRegistration(1)} className="bg-white px-8 cursor-pointer text-primary font-semibold xl py-2 rounded-md transition-all duration-150 ease-in-out">{t("continue")}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="h-full">
                        {
                            formToDisplay == 0 ? (
                                <StudentRegistration />
                            ) : formToDisplay == 1 ? (
                                <CompanyRegistration />
                            ) : (
                                <div className="hidden"></div>
                            )
                        }
                    </div>
                )
            }
        </>
    )
}

export default Registration;