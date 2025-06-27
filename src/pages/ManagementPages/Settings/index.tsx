import StudentSettings from "./StudentSettings.tsx";
import CompanySettings from "./CompanySettings.tsx";
import {useAuth} from "../../../utils/Context/AuthContext.tsx";

function Settings() {
    const { accountRole } = useAuth();

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