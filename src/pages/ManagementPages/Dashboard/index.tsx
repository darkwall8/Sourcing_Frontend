import { useAuth } from "../../../utils/Context/AuthContext";
import CompanyDashboard from "./CompanyDashboard/CompanyIndexDashboard";
import StudentDashboard from "./StudentDashboard/StudentIndexDashboard";

function DashBoard() {
    const { accountRole } = useAuth();

    return (
        <>
            {accountRole == "company" ? (
                <CompanyDashboard />
                ) : (
                <StudentDashboard />
                )
            }
        </>
    )
}

export default DashBoard;