import type { NextPage, NextPageContext } from "next";
import Register from "../containers/Register/Register";
import nookies from "nookies";

const RegisterPage: NextPage = (): JSX.Element => {
  return <Register />;
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
      title: "Register",
    },
  };
}
export default RegisterPage;
