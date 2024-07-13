import {
  Box,
  Button,
  Flex,
  GridItem,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { useState } from "react";
import ModalSearch from "../Modals/ModalSearch";

interface IProps {
  toogleOpenSideBar: () => void;
}

const Header: React.FC<IProps> = ({ toogleOpenSideBar }): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem pl="2" area={"header"}>
      <Flex px="5" h="100px" align="center" justify="space-between">
        <Button
          bg="white"
          _hover={{ bg: "white" }}
          _active={{ bg: "white" }}
          onClick={toogleOpenSideBar}
        >
          <Image src="/images/menu (1).png" alt="menu" />
        </Button>

        <Box flex="1">
          <Text textAlign="center" fontSize="30px" color="black">
            Food Items
          </Text>
        </Box>

        <Image onClick={onOpen} src="/images/search.png" alt="search" />
      </Flex>
      <ModalSearch isOpen={isOpen} onClose={onClose} />
    </GridItem>
  );
};

export default memo(Header);
