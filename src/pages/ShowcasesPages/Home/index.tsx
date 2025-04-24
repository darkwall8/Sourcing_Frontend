import { useTranslation } from "react-i18next";

function Home(){

    const { t } = useTranslation();

    return (
        <>
            <div 
                className="" 
                data-canbetest="true"
            >
                <h1 className="">
                    {t("entreprise.question")}
                </h1>
                <p>
                    {t("entreprise.intro")}
                </p>
                <div>
                    <img src="" alt="" />
                    {t("entreprise.list1")}
                </div>
                <div>
                    <img src="" alt="" />
                    {t("entreprise.list2")}
                </div>
                <div>
                    <img src="" alt="" />
                    {t("entreprise.list3")}
                </div>
            </div>
        </>
    )
}

export default Home;