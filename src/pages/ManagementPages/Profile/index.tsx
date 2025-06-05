import UserProfile from "./UserProfile";
import CompanyProfile from "./CompanyProfile";
import { useAuth } from "../../../utils/Context/AuthContext";

function Profile() {

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