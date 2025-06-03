import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../utils/Context/AuthContext";

function NavBar() {
  const currentPath = useLocation().pathname;
  const { t } = useTranslation();
  const { accountRole } = useAuth();

  const [isExpanded, setIsExpanded] = useState(true); // <- Nouveau
  const toggleNavbar = () => setIsExpanded((prev) => !prev); // <- Toggle function

  const [menu, setMenu] = useState(
    accountRole == "company"
      ? [
          { title: "dashboard.navbar.dashboard_nav", icon: "/icons/dashboard.svg", route: "/dashboard", isSelected: false },
          { title: "dashboard.navbar.student_nav", icon: "/icons/datalist.svg", route: "/datalist", isSelected: false },
          { title: "dashboard.navbar.chat_nav", icon: "/icons/chat.svg", route: "/chats", isSelected: false },
          { title: "dashboard.navbar.profile_nav", icon: "/icons/profile.svg", route: "/profile", isSelected: false },
          { title: "dashboard.navbar.settings_nav", icon: "/icons/setting.svg", route: "/setting", isSelected: false },
        ]
      : [
          { title: "dashboard.navbar.dashboard_nav", icon: "/icons/dashboard.svg", route: "/dashboard", isSelected: false },
          { title: "dashboard.navbar.company_nav", icon: "/icons/datalist.svg", route: "/datalist", isSelected: false },
          { title: "dashboard.navbar.profile_nav", icon: "/icons/profile.svg", route: "/profile", isSelected: false },
          { title: "dashboard.navbar.settings_nav", icon: "/icons/setting.svg", route: "/setting", isSelected: false },
        ]
  );

  useEffect(() => {
    setMenu((prevMenu) =>
      prevMenu.map((item) => ({
        ...item,
        isSelected: item.route === currentPath,
      }))
    );
  }, [currentPath]);

  return (
    <div
      className={`h-screen ${
        isExpanded ? "w-64" : "w-20"
      } transition-all duration-300 relative ease-in-out border-r-2 border-usual_light_purple`}
    >
      <div className="p-4">
        <div className="flex flex-col h-full gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/logo/sourcing_logo.svg" alt="logo" className="w-12" />
              {isExpanded && <p className="font-semibold text-primary">SOURCING</p>}
              {isExpanded && <p className="text-sm text-gray-500">v.01</p>}
            </div>

            <div className="flex flex-col gap-2">
              {menu.map((items, index) => (
                <NavLink
                  key={index}
                  className={`flex gap-4 px-2 items-center rounded-md h-12 cursor-pointer transition-colors duration-150 ${
                    items.isSelected ? "bg-primary text-white" : ""
                  }`}
                  to={items.route}
                >
                  <div
                    className={`rounded-full w-8 h-8 flex items-center justify-center ${
                      items.isSelected ? "text-white" : "text-black"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 bg-cover bg-center transition-all duration-200 ease-in-out`}
                      style={{
                        backgroundColor: items.isSelected ? "white" : "#9197B3",
                        maskImage: `url(${items.icon})`,
                        WebkitMaskImage: `url(${items.icon})`,
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                      }}
                    />
                  </div>
                  {isExpanded && <p className="">{t(items.title)}</p>}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex justify-center absolute -right-3 top-5.5">
            <button
              onClick={toggleNavbar}
              className="w-6 h-6 flex items-center justify-center bg-usual_light_purple rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
              title="Toggle Navigation"
            >
              {isExpanded ? "<" : ">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
