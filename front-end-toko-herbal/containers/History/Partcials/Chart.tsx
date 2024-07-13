import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import { memo } from "react";
import { Box } from "@chakra-ui/react";

const series = [
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
  },
];

const options: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
};
const Chart: React.FC = (): JSX.Element => {
  return (
    <Box bg="white" mt="10">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </Box>
  );
};

export default memo(Chart);
