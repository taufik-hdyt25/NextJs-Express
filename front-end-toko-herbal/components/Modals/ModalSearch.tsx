import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { memo } from "react";
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSearch: React.FC<IProps> = ({ isOpen, onClose }): JSX.Element => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="400px" mt="50px" ml="30%">
          <Input w={"full"} h="50px" placeholder="Silahkan cari" />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default memo(ModalSearch);
