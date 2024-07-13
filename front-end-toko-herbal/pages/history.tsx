import type { NextPage, NextPageContext } from "next";
import Layout from "../components/Layout/Layout";
import History from "../containers/History/History";
import nookies from "nookies";

const HistoryPage: NextPage = (): JSX.Element => {
  return (
    <Layout>
      <History />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const cookies = nookies.get(context);
  if (!cookies.token) {
    return {
      redirect: {
        destination: "login",
      },
    };
  }
  return {
    props: {
      title: "History",
    },
  };
}
export default HistoryPage;
