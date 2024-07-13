import Pagination, { PaginationProps } from "rc-pagination";
import React from "react";

import { PaginationStyled } from "./Pagination.styles";

const locale = {
  items_per_page: "",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
};

const PaginationComponent: React.FC<PaginationProps> = ({
  ...props
}): JSX.Element => {
  return (
    <PaginationStyled>
      <Pagination
        prefixCls="kol-pagination"
        locale={locale}
        pageSizeOptions={["10", "25", "50", "100"]}
        {...props}
      />
    </PaginationStyled>
  );
};

export default PaginationComponent;
