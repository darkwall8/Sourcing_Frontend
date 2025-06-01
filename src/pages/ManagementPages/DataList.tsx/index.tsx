// import { useTranslation } from "react-i18next";
import { useAuth } from "../../../utils/Context/AuthContext";
import CompaniesList from "./CompaniesList";
import StudentsList from "./UsersList";

function DataList() {

    // const { t } = useTranslation();
    const { accountRole } = useAuth();

    return (
        <>
            <div className="w-full h-full" data-canbetest="true">
                {
                    accountRole == "student" ? (
                        <CompaniesList />
                    ) : accountRole == "company" ? (
                        <StudentsList />
                    ) : (
                        <div>Undefined role</div>
                    )
                }
            </div>
        </>
    )
}

export default DataList;