import type { NextPage, NextPageContext } from "next";
import Layout from "../components/Layout/Layout";
import Product from "../containers/Product/Product";
import nookies from "nookies";
import { useDisclosure } from "@chakra-ui/react";

interface IProps {
  token: string;
}
const Home: NextPage<IProps> = ({ token }): JSX.Element => {
  const { isOpen: isOpenModal, onToggle: onOpenModal } = useDisclosure();
  return (
    <Layout onOpenModal={onOpenModal}>
      <Product isOpenModal={isOpenModal} token={token} />
    </Layout>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const cookies = nookies.get(context);
  if (!cookies.token) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: {
      title: "Home",
      token: cookies?.token ?? null,
    },
  };
}
export default Home;
