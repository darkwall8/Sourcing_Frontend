import { useTranslation } from "react-i18next";
import  Check  from "/icons/check.svg";
import HomeStudent from "/images/home_student_image.svg";
import IconHappy from "/icons/happy.svg";
import IconStudent from "/icons/students.svg";
import IconSchool from "/icons/school.svg";

function StudentSection({ shouldAnimate }: { shouldAnimate: boolean }) {
    const { t } = useTranslation();

    return (
        <div id="student" className="lg:h-full space-y-10 md:m-auto max-[1025px]:-mt-8 p-5">
            <div id="student_presentation" className="flex flex-col-reverse justify-center lg:space-x-15 gap-10 md:flex-row">
                <div id="student_text" className={`flex flex-col gap-7 justify-center max-lg:items-center max-lg:m-auto md:w-100 lg:w-150 ${shouldAnimate ? 'lg:animate-fade-right' : ''}`}>
                    <div className="flex flex-col gap-3">
                        <p className="md:text-xl lg:text-2xl font-bold"> {t("student.question")} </p>
                        <p className="lg:text-xl"> {t("student.intro")} </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-1.5 max-lg:text-sm">
                            <img src={Check}
                                 className="border-none rounded-full bg-primary p-2 w-10 h-10"
                                 alt="Check"
                            />
                            {t("student.list1")}
                        </div>
                        <div className="flex items-center gap-1.5 max-lg:text-sm">
                            <img src={Check}
                                 className="border-none rounded-4xl bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                            {t("student.list2")}
                        </div>
                        <div className="flex items-center gap-1.5 max-lg:text-sm">
                            <img src={Check}
                                 className="border-none rounded-4xl bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                            {t("student.list3")}
                        </div>
                        <div className="flex items-center gap-1.5 max-lg:text-sm">
                            <img src={Check}
                                 className="border-none rounded-4xl bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                            {t("student.list4")}
                        </div>
                    </div>
                </div>
                <div className={`w-90 lg:w-110 aspect-square max-lg:m-auto ${shouldAnimate ? 'lg:animate-fade-left' : ''}`}>
                    <img src={HomeStudent} alt="Company Image"/>
                </div>
            </div>
            <div id="student_comment" className={`flex max-md:flex-col justify-between m-auto w-full items-center gap-5 ${shouldAnimate ? 'lg:animate-fade-up' : ''}`}>
                <div className="flex items-center w-[95vw] m-auto gap-1.5">
                    <div className="w-15 h-15 p-3 aspect-square md:w-20 md:h-20 rounded-full bg-primary-op-40 md:p-4 flex items-center justify-center">
                        <img src={IconStudent} alt="Icon student"/>
                    </div>
                    <div className="max-sm:w-100 w-auto">
                        <p className="md:text-base lg:text-xl font-bold"> 90 </p>
                        <p className="md:text-[13px] lg:text-base"> {t("student.text1")} </p>
                    </div>
                </div>
                <div className="flex items-center w-full m-auto gap-1.5">
                    <div className="w-15 h-15 aspect-square p-3 md:w-20 md:h-20 rounded-full bg-primary-op-40 md:p-4 flex items-center justify-center">
                        <img src={IconHappy} alt="Icon happy" />
                    </div>
                    <div className="max-sm:w-100 w-auto">
                        <p className="md:text-base lg:text-xl font-bold"> 100% </p>
                        <p className="md:text-[13px] lg:text-base"> {t("student.text2")} </p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 w-[95vw] m-auto">
                    <div className="w-15 h-15 aspect-square p-3 md:w-20 md:h-20 rounded-full bg-primary-op-40 md:p-4 flex items-center justify-center">
                        <img src={IconSchool} alt="Icon school" />
                    </div>
                    <div className="max-sm:w-100 w-auto">
                        <p className="md:text-base lg:text-xl font-bold"> 80% </p>
                        <p className="md:text-[13px] lg:text-base"> {t("student.text3")} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentSection