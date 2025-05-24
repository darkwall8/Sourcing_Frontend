import { useTranslation } from "react-i18next";
import  Check  from "/icons/check.svg";
import HomeCompany from "/images/home_company_image.svg";
import IconCompany from "/icons/company.svg";
import IconVector from "/icons/Vector-2.svg";
import IconHappy from "/icons/happy.svg";

function EnterpriseSection({ shouldAnimate }: { shouldAnimate: boolean }) {
    const { t } = useTranslation();

    return (
        <div id="enterprise" className="xl:h-[87vh] space-y-15 p-5 pt-0 ">
            <div id="enterprise_presentation" className="flex flex-col justify-center lg:space-x-50 gap-10 lg:flex-row">
                <div className={`w-100 lg:w-120 aspect-square max-lg:m-auto ${shouldAnimate ? 'xl:animate-fade-right' : ''}`}>
                    <img src={HomeCompany} alt="Company Image"/>
                </div>
                <div id="enterprise_text" className={`flex flex-col gap-7 justify-center max-lg:items-center max-lg:m-auto md:w-150 ${shouldAnimate ? 'xl:animate-fade-left' : ''}`}>
                    <div className="flex flex-col gap-7">
                        <p className="text-3xl lg:text-4xl font-bold"> {t("enterprise.question")} </p>
                        <p className="text-xl lg:text-2xl"> {t("enterprise.intro")} </p>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-1.5">
                            <img src={Check}
                                 className="border-none rounded-full bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                            {t("enterprise.list1")}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <img src={Check}
                                 className="border-none rounded-4xl bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                            {t("enterprise.list2")}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <img src={Check}
                                 className="border-none rounded-4xl bg-primary p-2 w-10 h-10 aspect-square"
                                 alt="Check"
                            />
                            {t("enterprise.list3")}
                        </div>
                    </div>
                </div>
            </div>
            <div id="enterprise_comment" className={`flex max-md:flex-col justify-between m-auto w-full items-center gap-5 ${shouldAnimate ? 'xl:animate-fade-up' : ''}`}>
                <div className="flex items-center w-[95vw] m-auto gap-1.5 ">
                    <div className="aspect-square w-15 h-15 p-3 md:w-20 md:h-20 rounded-full bg-primary-op-40 md:p-4 flex items-center justify-center">
                        <img src={IconCompany} alt="Icon company" className=""/>
                    </div>
                    <div className="max-sm:w-100 w-auto">
                        <p className="text-xl md:text-2xl font-bold"> 90 </p>
                        <p> {t("enterprise.text1")} </p>
                    </div>
                </div>
                <div className="flex items-center w-[95vw] m-auto gap-1.5">
                    <div className="aspect-square w-15 h-15 p-3 md:w-20 md:h-20 rounded-full bg-primary-op-40 md:p-4 flex items-center justify-center">
                        <img src={IconHappy} alt="Icon happy" />
                    </div>
                    <div className="max-sm:w-100 w-auto">
                        <p className="text-xl md:text-2xl font-bold"> 100% </p>
                        <p> {t("enterprise.text2")} </p>
                    </div>
                </div>
                <div className="flex items-center gap-1.5 w-[95vw] m-auto">
                    <div className="aspect-square w-15 h-15 p-3 md:w-20 md:h-20 rounded-full bg-primary-op-40 md:p-4 flex items-center justify-center">
                        <img src={IconVector} alt="Icon vector" />
                    </div>
                    <div className="max-sm:w-100 w-auto">
                        <p className="text-xl md:text-2xl font-bold"> 80% </p>
                        <p> {t("enterprise.text3")} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseSection;