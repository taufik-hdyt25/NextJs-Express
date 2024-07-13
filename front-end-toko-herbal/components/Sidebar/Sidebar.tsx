import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { memo } from "react";

interface IProps {
  isOpenSideBar: boolean;
  onOpenModal: () => void;
}
const Sidebar: React.FC<IProps> = ({
  isOpenSideBar,
  onOpenModal,
}): JSX.Element => {
  return (
    <GridItem pl="2" area={"nav"}>
      <Box
        transition="0.3s"
        w={isOpenSideBar ? "250px" : "70px"}
        ml="20px"
        mt="50px"
        cursor={"pointer"}
      >
        <Link href="/">
          <Image mt="25px" src="/images/fork.png" alt="pesan" />
        </Link>

        <Link href="/history">
          <Image mt="40px" src="/images/clip.png" alt="laporan" />
        </Link>
        <Image
          onClick={onOpenModal}
          mt="40px"
          src="/images/add.png"
          alt="add"
        />
      </Box>
      {isOpenSideBar === true && (
        <Box fontSize="20px" pos="absolute" left="130px" top="160px">
          <Text>All Product</Text>
          <Text mt="16">History</Text>
          <Text mt="14">Add Product</Text>
        </Box>
      )}
    </GridItem>
  );
};

export default memo(Sidebar);
