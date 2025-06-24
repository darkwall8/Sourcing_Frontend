import RecentCandidature from './components/RecentCandidature';
import MostAccessibleCompany from './components/MostAccessibleCompany';
import ComplementInformation from './components/ComplementInformation';
import StageDomain from './components/StageDomain';

function StudentDashboard() {
  return (
    <div className="overflow-y-auto h-full">
      <div className={"flex p-3 gap-4 h-1/2"}>
          <div className='w-6/11'>
            <RecentCandidature/>
          </div>
          <div className="w-5/11">
            <MostAccessibleCompany/>
          </div>
      </div>
      <div className={"flex w-6/11 h-1/2 gap-3 p-3"}>
          <div className={"w-1/2"}>
            <ComplementInformation/>
          </div>
          <div className={"w-1/2"}>
            <StageDomain/>
          </div>
      </div>
    </div>
  );
}

export default StudentDashboard;