import React from "react";

const LoginBody: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className="w-full mt-12 mb-10">{props.children}</div>;
};
export default LoginBody;
