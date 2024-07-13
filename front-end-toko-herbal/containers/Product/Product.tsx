import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { memo, useEffect } from "react";
import { useProductAction } from "./Product.action";
import ModalAddItem from "../../components/Modals/ModalAddItem";
import { addTocard } from "../../redux/slices/cart.slices";
import { useAppDispatch } from "../../hooks/hooks";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/router";

interface IProps {
  token: string;
  isOpenModal: boolean;
}

const Products: React.FC<IProps> = ({ token, isOpenModal }): JSX.Element => {
  const router = useRouter();
  const {
    addProduct,
    products,
    getListProduct,
    onToggle,
    onClose,
    isOpen,
    meta,
  } = useProductAction(token);
  console.log(meta);

  const dispatch = useAppDispatch();
  const handlePageClick = (p: number) => {
    getListProduct(p);
  };

  //=============== memanggil dari Product.action.tsx ==================
  useEffect(() => {
    getListProduct();
  }, []);

  //=================== memanngil untuk membuka open modal ==================
  useEffect(() => {
    if (isOpenModal) {
      onToggle();
    }
  }, [isOpenModal]);

  const produks = [
    {
      id: 1,
      name: "Gitar Yamaha",
      image:
        "https://id.yamaha.com/id/files/Image-Index_A_series_1080x1080_74dc65411ff52ceba1dcd62de30315de.jpg?impolicy=resize&imwid=396&imhei=396",
      price: 15000,
      stock: 10,
    },
    {
      name: "Gitar cowboy",
      image:
        "https://id.yamaha.com/id/files/Image-Index_A_series_1080x1080_74dc65411ff52ceba1dcd62de30315de.jpg?impolicy=resize&imwid=396&imhei=396",
      price: 15000,
      stock: 100,
    },
    {
      id: 2,
      name: "Gitar Taylor",
      image:
        "https://id.yamaha.com/id/files/Image-Index_A_series_1080x1080_74dc65411ff52ceba1dcd62de30315de.jpg?impolicy=resize&imwid=396&imhei=396",
      price: 15000,
      stock: 1,
    },
    {
      id: 3,
      name: "Gitar Ibanez",
      image:
        "https://id.yamaha.com/id/files/Image-Index_A_series_1080x1080_74dc65411ff52ceba1dcd62de30315de.jpg?impolicy=resize&imwid=396&imhei=396",
      price: 15000,
      stock: 500,
    },
    {
      id: 4,
      name: "Gitar Fender",
      image:
        "https://id.yamaha.com/id/files/Image-Index_A_series_1080x1080_74dc65411ff52ceba1dcd62de30315de.jpg?impolicy=resize&imwid=396&imhei=396",
      price: 15000,
      stock: 100,
    },
  ];
  return (
    <Box>
      <Grid templateColumns="1fr 1fr 1fr 1fr" gap="8">
        {produks?.map((product: any, index: number) => {
          return (
            <GridItem key={`produk-item-${index}`}>
              <Box
                h="full"
                w="full"
                bg="white"
                shadow="md"
                rounded="md"
                onClick={() => dispatch(addTocard(product))}
                cursor="pointer"
              >
                <Image w="full" src="/images/bear.png" alt={product.name} />
                <Box p="2">
                  <Text textAlign="center" fontSize="25px">
                    {product.name}
                  </Text>
                  <Text textAlign="center" fontWeight="bold" fontSize="25px">
                    Rp.{product.price}
                  </Text>
                  <Text> {product.stock}</Text>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>

      <ModalAddItem addProduct={addProduct} isOpen={isOpen} onClose={onClose} />

      <Flex pos="absolute" bottom="1" bg="gray.100" ml="500px" fontSize="20px">
        <Pagination
          onChange={handlePageClick}
          pageSize={meta?.limit ?? 0}
          current={meta?.page ?? 0}
          total={meta?.totalData ?? 0}
        />
      </Flex>
    </Box>
  );
};

export default memo(Products);
