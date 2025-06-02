import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../utils/Context/AuthContext";

function NavBar() {
  const currentPath = useLocation().pathname;
  const { t } = useTranslation();
  const { accountRole } = useAuth();

  const [menu, setMenu] = useState(
    accountRole == "company" ?
    [
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

  // 🛠️ Met à jour automatiquement les items sélectionnés quand `currentPath` change
  useEffect(() => {
    setMenu((prevMenu) =>
      prevMenu.map((item) => ({
        ...item,
        isSelected: item.route === currentPath,
      }))
    );
  }, [currentPath]); // ⬅️ Exécuté à chaque changement d'URL

  return (
    <div className="h-screen min-w-fit border-r-2 border-usual_light_purple">
      <div className="!p-4">
        <div className="w-fit h-screen flex flex-col gap-24">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img src="/logo/sourcing_logo.svg" alt="logo" className="w-16" />
              <p className="hidden md:block font-semibold text-primary">SOURCING</p>
            </div>
            <p className="hidden md:block">v.01</p>
          </div>

          <div className="flex flex-col gap-2">
            {menu.map((items, index) => (
              <NavLink
                key={index}
                className={`flex gap-4 md:pl-2 items-center justify-center md:justify-start rounded-md h-12 cursor-pointer ${
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
                <p className="hidden md:inline">{t(items.title)}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
