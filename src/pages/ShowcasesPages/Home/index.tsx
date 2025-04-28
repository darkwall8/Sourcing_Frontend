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
            <section>
                <div className="flex justify-between ml-15 mr-15 mb-2 mt-10 max-md:flex-col max-md:items-center">
                    <div>
                        <img src= {HomeCompany}
                            alt="home company"
                            className="w-110"
                        />
                    </div>
                    <div 
                        className="flex gap-7 flex-col m-5 w-150 max-sm:w-100" 
                        data-canbetest="true"
                    >
                        <div className="flex flex-col gap-7 max-md:text-center">
                            <h1 className=" text-3xl font-bold">
                                {t("entreprise.question")}
                            </h1>
                            <p className="text-xl">
                                {t("entreprise.intro")}
                            </p>
                        </div>
                        <div className="flex flex-col gap-7 text-justify">
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-full bg-primary p-4 w-12 h-12"
                                    alt="Check" 
                                />
                                {t("entreprise.list1")}
                            </div>
                            <div className="flex items-center  gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-4 w-12 h-12"
                                    alt="Check" 
                                />
                                {t("entreprise.list2")}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-4 w-12 h-12"
                                    alt="Check" 
                                />
                                {t("entreprise.list3")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-justify ml-15 mr-15 mt-5 max-md:flex-col max-md:gap-5">
                    <div className="flex items-center gap-3">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconCompany}
                                alt="company icon"
                            />
                        </div>
                        <div className="w-70">
                            <p className="text-2xl font-bold">90</p>
                            <p className="text-sm">{t("entreprise.text1")}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconHappy}
                                alt="company icon"
                            />
                        </div>
                        <div className="w-70">
                            <p className="text-2xl font-bold">100%</p>
                            <p className="text-sm"> {t("entreprise.text2")} </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconVector}
                                alt="company icon"
                            />
                        </div>
                        <div className="w-70">
                            <p className="text-2xl font-bold">80%</p>
                            <p className="text-sm"> {t("entreprise.text3")} </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex justify-between ml-15 mr-15 mb-2 mt-10 max-md:flex-col max-md:items-center">
                    <div>
                        <img src= {HomeStudent}
                            alt="home company"
                            className="w-110"
                        />
                    </div>
                    <div 
                        className="flex gap-7 flex-col m-5 w-150 max-sm:w-100" 
                        data-canbetest="true"
                    >
                        <div className="flex flex-col gap-7 max-md:text-center">
                            <h1 className=" text-3xl font-bold">
                                {t("student.question")}
                            </h1>
                            <p className="text-xl">
                                {t("student.intro")}
                            </p>
                        </div>
                        <div className="flex flex-col gap-7 text-justify">
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-full bg-primary p-4 w-12 h-12"
                                    alt="Check" 
                                />
                                {t("student.list1")}
                            </div>
                            <div className="flex items-center  gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-4 w-12 h-12"
                                    alt="Check" 
                                />
                                {t("student.list2")}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-4 w-12 h-12"
                                    alt="Check" 
                                />
                                {t("student.list3")}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <img src={Check} 
                                    className="border-none rounded-4xl bg-primary p-4 w-12 h-12"
                                    alt="Check" 
                                />
                                {t("student.list4")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-justify ml-15 mr-15 m-5 max-md:flex-col max-md:gap-5">
                    <div className="flex items-center gap-3">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconStudent}
                                alt="company icon"
                            />
                        </div>
                        <div className="w-70">
                            <p className="text-2xl font-bold">1300</p>
                            <p className="text-sm">{t("student.text1")}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconHappy}
                                alt="company icon"
                            />
                        </div>
                        <div className="w-70">
                            <p className="text-2xl font-bold">100%</p>
                            <p className="text-sm"> {t("student.text2")} </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-20 h-20 border-none rounded-full bg-primary-op-40 p-4 flex items-center justify-center">
                            <img src={IconSchool}
                                alt="company icon"
                            />
                        </div>
                        <div className="w-70">
                            <p className="text-2xl font-bold">80%</p>
                            <p className="text-sm"> {t("student.text3")} </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;