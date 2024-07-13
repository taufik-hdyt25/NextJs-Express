import dynamic from "next/dynamic";

const Pagination = dynamic(import("./Pagination"), {
  ssr: false,
});

export default Pagination;
