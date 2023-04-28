import React from "react";
import DashboardBody from "./dashboard-body";
import DashboardFooter from "./dashboard-footer";
import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

export interface DashboardLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div>
      <DashboardHeader />
      <DashboardBody>
        <DashboardSidebar />
        {children}
      </DashboardBody>
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
