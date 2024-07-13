import { Box, Flex, GridItem, Text, VStack } from "@chakra-ui/react";
import { renderToHTML } from "next/dist/server/render";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { ICartItem } from "../../redux/slices/cart.slices";
import CartItem from "./Partials/CartItem";
import CheckOut from "./Partials/CheckOut";

const Cart: React.FC = (): JSX.Element => {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <GridItem pl="2" area={"cart"}>
      <Flex direction="column" h="full">
        <Text fontSize="25px" color="black" textAlign="center" mt="7">
          Cart
        </Text>
        <Box
          w="30px"
          bg="#57CAD5"
          rounded={"full"}
          ml="56%"
          mt="-30px"
          display="flex"
          justifyContent={"center"}
        >
          <Text
            textAlign="center"
            fontSize="18px"
            fontWeight={"bold"}
            color="white"
          >
            {cartItems?.map((e) => e.qty).reduce((a, b) => a + b, 0) ?? 0}
          </Text>
        </Box>

        <Box
          pr="2"
          flex="1"
          h="full"
          mt="50px"
          overflowY="auto"
          maxH="calc(100vh - 350px)"
        >
          <VStack align="stretch" spacing="4">
            {cartItems?.map((cartItem: ICartItem, index: number) => {
              return (
                <CartItem cartItem={cartItem} key={`produk-item-${index}`} />
              );
            })}
          </VStack>
        </Box>
        <CheckOut />
      </Flex>
    </GridItem>
  );
};

export default memo(Cart);
