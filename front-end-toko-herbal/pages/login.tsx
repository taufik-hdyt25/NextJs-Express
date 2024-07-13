import type { NextPage, NextPageContext } from "next";
import Login from "../containers/Login/Login";
import nookies from "nookies";
import { redirect } from "next/dist/server/api-utils";

const LoginPage: NextPage = (): JSX.Element => {
  return <Login />;
};

export async function getServerSideProps(context: NextPageContext) {
  const cookies = nookies.get(context);
  if (cookies.token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      title: "Login",
    },
  };
}
export default LoginPage;
