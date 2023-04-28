// import MainBody from "@/components/Layout/main-body";
// import MainFooter from "@/components/Layout/main-footer";
// import MainHeader from "@/components/Layout/main-header";

import LoginLayout from "@/components/Layout/LoginLayout";
import LoginBody from "@/components/Layout/LoginLayout/login-body";
import LoginFooter from "@/components/Layout/LoginLayout/login-footer";
import LoginHeader from "@/components/Layout/LoginLayout/login-header";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Suspense } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Suspense fallback={<div>...Loading</div>}>
      {/* <PrivateRoute component={Component} redirectUrl={"/login"}> */}
      <Component {...pageProps} />
      {/* </PrivateRoute> */}
    </Suspense>
  );
}
