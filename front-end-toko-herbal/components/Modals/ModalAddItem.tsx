import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
} from "@chakra-ui/react";
import { FormEvent, memo, useState } from "react";
import { ICreateProduct } from "../../containers/Product/Products.types";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  addProduct: (data: ICreateProduct) => void;
}

const ModalCheckout: React.FC<IProps> = ({
  isOpen,
  onClose,
  addProduct,
}): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [brand, setBrand] = useState<string>("");
  const [type, setType] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: ICreateProduct = {
      name,
      price,
      stock,
      brand,
      type,
    };
    addProduct(data);
  };

  return (
    <Box boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)">
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="3xl">
        <ModalOverlay />
        <form onSubmit={onSubmit}>
          <ModalContent h="781px">
            <ModalHeader fontSize="35px">Add Item</ModalHeader>
            <ModalBody>
              <Flex>
                <Box
                  textAlign="center"
                  w="150px"
                  fontSize="20px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Name Product
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    w="550px"
                    h="67px"
                    fontSize="25px"
                    fontWeight="semibold"
                    border="1px solid #CECECE"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  ></Input>
                </Box>
              </Flex>

              <Flex mt="30px">
                <Box
                  textAlign="center"
                  w="150px"
                  fontSize="20px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Price
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    onChange={(e) => {
                      setPrice(Number(e.target.value));
                    }}
                    w="550px"
                    h="67px"
                    fontSize="20px"
                    fontWeight="semibold"
                    border="1px solid #CECECE"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  />
                </Box>
              </Flex>

              <Flex mt="30px">
                <Box
                  textAlign="center"
                  w="150px"
                  fontSize="20px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Stock
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    onChange={(e) => {
                      setStock(Number(e.target.value));
                    }}
                    w="411px"
                    h="67px"
                    fontSize="25px"
                    fontWeight="semibold"
                    border="1px solid #CECECE"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  ></Input>
                </Box>
              </Flex>

              <Flex mt="30px">
                <Box
                  textAlign="center"
                  w="150px"
                  fontSize="20px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Brand
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                    w="411px"
                    h="67px"
                    fontSize="25px"
                    fontWeight="semibold"
                    border="1px solid #CECECE"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  ></Input>
                </Box>
              </Flex>

              <Flex mt="30px">
                <Box
                  textAlign="center"
                  w="150px"
                  fontSize="20px"
                  fontWeight="semibold"
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                >
                  Category
                </Box>
                <Spacer />
                <Box w="550px" fontSize="30px" fontWeight="semibold" bg="200px">
                  <Input
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    w="278px"
                    h="67px"
                    fontWeight="semibold"
                    fontSize="27px"
                    border="1px solid #CECECE"
                    boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
                  />
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={onClose}
                fontSize="30px"
                w="180px"
                h="70px"
                bg="#F24F8A"
                color="white"
                borderRadius="10px"
                mr="20px"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                fontSize="30px"
                w="180px"
                h="70px"
                bg="#57CAD5"
                color="white"
                borderRadius="10px"
              >
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </Box>
  );
};

export default memo(ModalCheckout);
