import React from "react";
import LoginHeader from "./login-header";
import LoginBody from "./login-body";
import LoginFooter from "./login-footer";

interface LoginLayoutProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({
  header,
  footer,
  children,
}) => {
  return (
    <div>
      <LoginHeader />
      <LoginBody>{children}</LoginBody>
      <LoginFooter />
    </div>
  );
};

export default LoginLayout;
