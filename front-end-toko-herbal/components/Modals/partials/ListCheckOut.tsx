import {
  Box,
  Flex,
  Grid,
  GridItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { ICartItem } from "../../../redux/slices/cart.slices";
interface IProps {
  cartItem: ICartItem;
}

const ListCheckOut: React.FC<IProps> = ({ cartItem }): JSX.Element => {
  return (
    <Box>
      <Flex pt="5">
        <Box>
          <Text fontSize="25px" color="black" fontWeight="semibold">
            {cartItem.name}
          </Text>
          <Text fontSize="25px" color="black" fontWeight="semibold">
            {cartItem.qty}
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize="25px" color="black" fontWeight="semibold">
            Rp.{cartItem.price * cartItem.qty}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default memo(ListCheckOut);
