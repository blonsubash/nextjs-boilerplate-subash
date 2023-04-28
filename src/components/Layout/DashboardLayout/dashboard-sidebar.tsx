import Link from "next/link";
import dashboardClass from "./dashboard.module.css";
import Image from "next/image";
import HomeIcon from "../../../assets/icons/home.svg";
import { useState } from "react";
import classNames from "classnames";
const DashboardSidebar = () => {
  const [openLeftSideBar, setOpenLeftSideBar] = useState(false);
  const menu = [
    {
      path: "/dashboard",
      pathName: "Dashboard",
      icon: <Image src={HomeIcon} alt="home" />,
    },
    {
      path: "/documents",
      pathName: "Documents",
      icon: <Image src={HomeIcon} alt="home" />,
    },
    {
      path: "/appointments",
      pathName: "Appointments",
      icon: <Image src={HomeIcon} alt="home" />,
    },
    {
      path: "/messages",
      pathName: "Messages",
      icon: <Image src={HomeIcon} alt="home" />,
    },
    {
      path: "/invoices",
      pathName: "Invoices",
      icon: <Image src={HomeIcon} alt="home" />,
    },
  ];
  console.log("openLeftSideBar", openLeftSideBar);
  return (
    <header>
      <div
        className={classNames(`${dashboardClass.dashboard__sidebar}`, {
          [dashboardClass.leftsidebar_active]: openLeftSideBar,
        })}
        onMouseEnter={() => setOpenLeftSideBar(true)}
        onMouseLeave={() => setOpenLeftSideBar(false)}
      >
        {menu?.map((menuItem) => (
          <Link href={menuItem?.path}>
            <div className={`${dashboardClass.dashboard__menu_item}`}>
              <span className={`${dashboardClass.dashboard__menu_icon}`}>
                {menuItem?.icon}
              </span>
              <span
                className={classNames(
                  `${dashboardClass.dashboard__menu_label}`,
                  {
                    [dashboardClass.leftsidebar_active_label]: openLeftSideBar,
                  }
                )}
              >
                {menuItem?.pathName}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default DashboardSidebar;
