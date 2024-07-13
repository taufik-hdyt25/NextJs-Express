import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { memo, useState } from "react";

import {
  decrementQty,
  ICartItem,
  incrementQty,
} from "../../../redux/slices/cart.slices";
import { useAppDispatch } from "../../../hooks/hooks";

interface IProps {
  cartItem: ICartItem;
}

const CartItem: React.FC<IProps> = ({ cartItem }): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <HStack>
      <Image
        w="100px"
        h="100px"
        src="/images/firdaus-roslan-pN769u0KHNA-unsplash.png"
        alt="Image"
      />
      <Box flex="1">
        <Text fontSize="20px" color="black">
          {cartItem.name}
        </Text>
        <Flex justify="space-between" mt="20px">
          <Flex>
            <Button
              w="40px"
              h="40px"
              border="1px solid #82DE3A"
              bg="rgba(130, 222, 58, 0.2)"
              fontSize="20px"
              textAlign="center"
              color="#82DE3A"
              rounded="0"
              onClick={() => dispatch(decrementQty(cartItem))}
              disabled={cartItem.qty === 1}
            >
              <MinusIcon />
            </Button>

            <Box
              w="45px"
              h="40px"
              border="1px solid #82DE3A"
              fontSize="1fr"
              textAlign="center"
              color="#82DE3A"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {cartItem.qty ?? 0}
            </Box>
            <Button
              w="40px"
              h="40px"
              border="1px solid #82DE3A"
              bg="rgba(130, 222, 58, 0.2)"
              fontSize="20px"
              textAlign="center"
              color="#82DE3A"
              fontWeight="bold"
              rounded="0"
              disabled={Number(cartItem.qty) >= Number(cartItem.stock)}
              onClick={() => dispatch(incrementQty(cartItem))}
            >
              <AddIcon />
            </Button>
          </Flex>
          <Text fontSize="20px">Rp.{cartItem.price * cartItem.qty}</Text>
        </Flex>
      </Box>
    </HStack>
  );
};

export default memo(CartItem);
