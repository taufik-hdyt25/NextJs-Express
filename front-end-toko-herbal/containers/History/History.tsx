import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import { memo } from "react";

import {
  bubleStyles,
  bubleStyles2,
  bubleStyles3,
} from "./Partcials/Product.styles";
import { Chart } from "./Partcials";

const History: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap="3">
        <GridItem>
          <Box
            rounded="md"
            filter="drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25))"
            bgGradient="linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%)"
            h="213px"
            pos="relative"
          >
            <Box {...bubleStyles} />
            <Box {...bubleStyles} top="30px" right="50px" />
            <Box {...bubleStyles} top="50px" right="100px" />
            <VStack h="full" justify="center">
              <Text fontSize="15px">Today’s Income</Text>
              <Text fontSize="25px">Rp. 1.000.000</Text>
              <Text fontSize="15px">+2% Yesterday</Text>
            </VStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            rounded="md"
            filter="drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25))"
            bgGradient="linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%)"
            h="213px"
            pos="relative"
          >
            <Box {...bubleStyles2} />
            <Box {...bubleStyles2} top="30px" right="50px" />
            <Box {...bubleStyles2} top="50px" right="100px" />
            <VStack ml="30px" h="full" justify="center">
              <Text fontSize="15px">Orders</Text>
              <Text fontSize="25px">3.270</Text>
              <Text fontSize="15px">+5% Last Week</Text>
            </VStack>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            rounded="md"
            filter="drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25))"
            bgGradient="linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%)"
            h="213px"
            pos="relative"
          >
            <Box {...bubleStyles3} />
            <Box {...bubleStyles3} top="30px" right="50px" />
            <Box {...bubleStyles3} top="50px" right="100px" />
            <VStack ml="30px" h="full" justify="center">
              <Text fontSize="15px">This Year’s Income</Text>
              <Text fontSize="25px">Rp. 100.000.000.000</Text>
              <Text fontSize="15px">+10% Last Year</Text>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
      <Chart />
    </Box>
  );
};

export default memo(History);
