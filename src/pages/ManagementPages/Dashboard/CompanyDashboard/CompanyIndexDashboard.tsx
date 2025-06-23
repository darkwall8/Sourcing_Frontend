import RecentCandidature from './components/RecentCandidature';
import MostAccessibleCompany from './components/MostAccessibleCompany';
import ComplementInformation from './components/ComplementInformation';
import StageDomain from './components/StageDomain';

function StudentDashboard() {
  return (
    <>
      <div>
          <div className='w-2/3'>
            <RecentCandidature/>
          </div>
          <div className="w-1/3">
            <MostAccessibleCompany/>
          </div>
      </div>
      <div>
          <div>
            <ComplementInformation/>
          </div>
          <div>
            <StageDomain/>
          </div>
      </div>
    </>
  );
}

export default StudentDashboard;