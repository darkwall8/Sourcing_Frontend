import RecentCandidature from './components/RecentCandidature';
import MostAccessibleCompany from './components/MostAccessibleCompany';
import ComplementInformation from './components/ComplementInformation';
import StageDomain from './components/StageDomain';

function StudentDashboard() {
  return (
    <div className="h-full">
      <div className={"flex p-2 gap-4 h-1/2"}>
          <div className='w-6/11 h-full bg-white rounded-2xl shadow-md'>
            <RecentCandidature/>
          </div>
          <div className="w-5/11 h-full bg-white shadow-md rounded-2xl p-3">
            <MostAccessibleCompany/>
          </div>
      </div>
      <div className={"flex w-6/11 h-1/2 gap-3 p-3"}>
          <div className={"w-1/2 h-full"}>
            <ComplementInformation/>
          </div>
          <div className={"w-1/2 h-full"}>
            <StageDomain/>
          </div>
      </div>
    </div>
  );
}

export default StudentDashboard;