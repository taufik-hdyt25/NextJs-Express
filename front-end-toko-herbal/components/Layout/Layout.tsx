import { memo } from "react";
import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import { ILayoutProps } from "./Layout.types";

const Layout: React.FC<ILayoutProps> = ({
  children,
  onOpenModal,
}): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Grid
      templateAreas={`"header header cart"
              "nav main cart"
              "nav footer cart"`}
      gridTemplateRows={"100px 1fr 30px"}
      gridTemplateColumns={"auto 1fr "}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <Header toogleOpenSideBar={onToggle} />
      <Sidebar onOpenModal={onOpenModal} isOpenSideBar={isOpen} />
      <Cart />
      <GridItem
        p="4"
        bg="rgba(190, 195, 202, 0.3)"
        area={"main"}
        overflowY="auto"
      >
        {children}
      </GridItem>
      <Footer />
    </Grid>
  );
};

export default memo(Layout);
