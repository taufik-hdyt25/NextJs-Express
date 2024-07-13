import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { clearCard } from "../../../redux/slices/cart.slices";
import ModalCheckout from "../../Modals/ModalCheckout";

const CheckOut: React.FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <Box w="400px">
      <Flex>
        <Box>
          <Text fontSize="24px" ml="20px">
            Total:
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text mr="20px" fontSize="24px">
            Rp.
            {cartItems
              ?.map((e) => e.price * e.qty)
              .reduce((a, b) => a + b, 0) ?? 0}
          </Text>
        </Box>
      </Flex>
      <Text fontSize="20px" fontWeight="semibold" ml="15px">
        *Belum termasuk ppn
      </Text>

      <Grid>
        <GridItem>
          <Button
            onClick={onOpen}
            h="61px"
            fontSize="25px"
            bg="#57CAD5"
            color="white"
            fontWeight="bold"
            rounded="0"
            w="390px"
          >
            Checkout
          </Button>
        </GridItem>
        <GridItem>
          <Button
            h="61px"
            fontSize="25px"
            bg="#F24F8A"
            color="white"
            fontWeight="bold"
            rounded="0"
            mt="3"
            w="390px"
            onClick={() => dispatch(clearCard())}
          >
            Cancel
          </Button>
        </GridItem>
        {cartItems.length === 0 && (
          <Box pos="absolute" top="150px" right="100px">
            <Image src="/images/cart kosong.png" alt="cart kosong" />
            <Text>Keranjang Kosong Yuk Di Order</Text>
          </Box>
        )}
      </Grid>

      <ModalCheckout isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default memo(CheckOut);
