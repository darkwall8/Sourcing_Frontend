import RecentCandidature from './components/RecentCandidature';
import MostAccessibleCompany from './components/MostAccessibleCompany';
import ComplementInformation from './components/ComplementInformation';
import StageDomain from './components/StageDomain';

function StudentDashboard() {
  return (
    <>
      <div className={"flex m-3 gap-4"}>
          <div className='w-6/11'>
            <RecentCandidature/>
          </div>
          <div className="w-5/11 border">
            <MostAccessibleCompany/>
          </div>
      </div>
      <div className={"flex w-6/11 -mt-2"}>
          <div className={"w-3/8 m-3"}>
            <ComplementInformation/>
          </div>
          <div className={"w-5/8 m-3"}>
            <StageDomain/>
          </div>
      </div>
    </>
  );
}

export default StudentDashboard;