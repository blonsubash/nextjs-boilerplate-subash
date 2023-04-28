import React from "react";

const DashboardBody: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className="w-full mt-12 mb-10">{props.children}</div>;
};
export default DashboardBody;
