import { useTranslation } from "react-i18next";
import UserProfile from "./UserProfile";
import CompanyProfile from "./CompanyProfile";
import { useAuth } from "../../../utils/Context/AuthContext";

function Profile() {

    const { t } = useTranslation();
    const { accountRole } = useAuth()

    return (
        <>
            <div className="w-full h-full" data-canbetest="true">
                {
                    accountRole == "student" ? (
                        <UserProfile />
                    ) : accountRole == "company" ? (
                        <CompanyProfile />
                    ) : (
                        <div>Undefined role</div>
                    )
                }
            </div>
        </>
    )
}

export default Profile;