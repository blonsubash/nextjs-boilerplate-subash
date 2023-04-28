import Link from "next/link";
import dashboardClass from "./dashboard.module.css";
const DashboardHeader = () => {
  return (
    <header>
      <div className={`${dashboardClass.dashboard_header}`}>
        <h2>Dashboard Header</h2>
      </div>
    </header>
  );
};

export default DashboardHeader;
