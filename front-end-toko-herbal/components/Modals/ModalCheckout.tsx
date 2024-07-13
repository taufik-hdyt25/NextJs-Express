import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormEvent, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearCard, ICartItem } from "../../redux/slices/cart.slices";
import axios from "axios";
import ListCheckOut from "./partials/ListCheckOut";
import nookies from "nookies";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCheckout: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const cookies = nookies.get();
  const token = cookies?.token ?? null;
  const dispath = useAppDispatch();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const order = (e: FormEvent) => {
    e.preventDefault();
    const body = {
      cart_items: cartItems.map((e) => {
        return {
          id_product: e.id,
          qty: e.qty,
        };
      }),
    };
    console.log(body);
    axios
      .post("http://localhost:5000/api/v1/order", body, config)
      .then(function (response) {
        console.log(response);
        onClose();
        dispath(clearCard());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="3xl"
      scrollBehavior="outside"
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <Flex>
            <Box>
              <Text fontSize="25px" color="black" fontWeight="semibold">
                Checkout
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize="25px" color="black" fontWeight="semibold">
                Receipt no: 010410919
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box>
              <Text fontSize="20px" color="black" fontWeight="semibold">
                Cashier :
              </Text>
            </Box>

            <Box>
              <Text fontSize="20px" color="black" fontWeight="semibold" ml="2">
                Pevita Pearce
              </Text>
            </Box>
          </Flex>
        </ModalHeader>

        <ModalBody>
          <VStack mt={"3"} align="stretch">
            {cartItems?.map((cartItem: ICartItem, index: number) => {
              return (
                <ListCheckOut
                  cartItem={cartItem}
                  key={`produk-item-${index}`}
                />
              );
            })}
          </VStack>
        </ModalBody>

        <Flex pr="8" pt="10" justify="flex-end">
          <Box>
            <Text fontSize="25px" color="black" fontWeight="semibold">
              Total :
            </Text>
          </Box>
          <Box>
            <Text fontSize="25px" color="black" fontWeight="semibold" pl="5">
              Rp.
              {cartItems
                ?.map((e) => e.price * e.qty)
                .reduce((a, b) => a + b, 0) ?? 0}
            </Text>
          </Box>
        </Flex>

        <ModalFooter display="inline-block">
          <Button
            fontSize="35px"
            w="full"
            h="70px"
            bg="#F24F8A"
            color="white"
            onClick={order}
          >
            Print
          </Button>
          <Text textAlign="center" fontSize="25px" fontWeight="semibold">
            Or
          </Text>
          <Button fontSize="35px" w="full" h="70px" bg="#57CAD5" color="white">
            Send email
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ModalCheckout);
