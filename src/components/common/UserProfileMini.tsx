import { useTranslation } from "react-i18next";

export interface studentExample {
  name: string,
  surname: string,
  email: string,
  country: string,
  schoolLevel: string,
  specification: string,
  offerPreferences: string[],
  github: string,
  portfolio: string,
  linkedin: string,
  cvUrl: string,
  profilePictureUrl?: string
};

function UserProfileMini({ student }: { student: studentExample }) {

  const { t } = useTranslation();

  return (
    <div className="">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative">

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <img
              src={student.profilePictureUrl || "/images/default-profile.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-usual_light_purple"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-usual_purple mb-4">
              {student.name} {student.surname}
            </h2>

            <div className="space-y-2">
              <p><span className="font-semibold">{ t("dashboard.email") } :</span> {student.email}</p>
              <p><span className="font-semibold">{ t("dashboard.country") } :</span> {student.country}</p>
              <p><span className="font-semibold">{ t("dashboard.school_level") } :</span> {student.schoolLevel}</p>
              <p><span className="font-semibold">{ t("dashboard.domain") } :</span> {student.specification}</p>

              <div>
                <span className="font-semibold">{ t("dashboard.preferences") }</span>
                <ul className="list-disc ml-5 text-sm">
                  {student.offerPreferences.map((pref, index) => (
                    <li key={index}>{pref}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 text-sm">
                <a href={student.cvUrl} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
                  { t("dashboard.see_cv") }
                </a>
                <a href={student.github} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-md hover:opacity-90 transition">
                  <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4" /> { t("dashboard.see_github") }
                </a>
                <a href={student.portfolio} target="_blank" className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition">
                  { t("dashboard.see_portfolio") }
                </a>
                <a href={student.linkedin} target="_blank" className="flex items-center gap-2 px-3 py-2 text-black border rounded-md transition">
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" /> { t("dashboard.see_linkedin") }
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileMini;
