import { GridItem } from "@chakra-ui/react";
import { memo } from "react";

const Footer: React.FC = (): JSX.Element => {
  return <GridItem pl="2" area={"footer"}></GridItem>;
};

export default memo(Footer);
