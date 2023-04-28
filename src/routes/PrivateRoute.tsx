// import { useRouter } from "next/router";
// import { ReactNode } from "react";
// import LoginLayout from "@/components/Layout/LoginLayout";
// import DashboardLayout from "@/components/Layout/DashboardLayout";

// interface PrivateRouteProps {
//   component: React.ComponentType<any>;
//   [key: string]: any;
// }
// export function PrivateRoute({
//   component: Component,
//   redirectUrl,
//   ...rest
// }: PrivateRouteProps) {
//   const router = useRouter();
//   const isAdminAuthenticated = true;
//   if (!isAdminAuthenticated) {
//     // router.push({
//     //   pathname: redirectUrl,
//     //   query: { from: router.asPath },
//     // });
//     router.replace("/dashboard");
//     return null;
//   }

//   return (
//     <DashboardLayout>
//       <Component {...rest} />
//     </DashboardLayout>
//   );
// }

// Testing

import { useRouter } from "next/router";
import { Navigate } from "react-router-dom";
import { DashboardLayoutProps } from "@/components/Layout/DashboardLayout";
interface Props {
  layout: React.ComponentType<{ children: React.ReactNode }>;
  children: React.ReactNode;
}

const PrivateRoutes: React.FC<Props> = ({ children, layout: Layout }) => {
  const router = useRouter();
  const isUserAuthenticated = true;

  if (!isUserAuthenticated) {
    return <Navigate to="/login" replace />;
  } else {
    return <Layout>{children}</Layout>;
  }
};

export default PrivateRoutes;
