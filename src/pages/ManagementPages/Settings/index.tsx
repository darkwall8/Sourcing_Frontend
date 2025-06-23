// import { useTranslation } from "react-i18next";
import StudentSettings from "../Settings/StudentSettings.tsx";
import CompanySettings from "../Settings/CompanySettings.tsx";
import {useAuth} from "../../../utils/Context/AuthContext.tsx";

function Settings() {
    const { accountRole } = useAuth();
    // const { t } = useTranslation();

    return (
        <>
            {accountRole == "company" ? (
                <CompanySettings />
                ) : (
                <StudentSettings />
                )
            }
        </>
    )
}

export default Settings;