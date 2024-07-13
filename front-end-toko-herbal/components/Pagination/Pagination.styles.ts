import { theme } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const PaginationStyled = styled.div({
  ".kol-pagination": {
    margin: 0,
    padding: 0,
    fontSize: 14,
    display: "flex",
    alignItems: "center",
  },
  ".kol-pagination ul, .kol-pagination ol": {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  ".kol-pagination::after": {
    display: "block",
    clear: "both",
    height: 0,
    overflow: "hidden",
    visibility: "hidden",
    content: "' '",
  },
  ".kol-pagination-total-text": {
    display: "inline-block",
    height: 30,
    lineHeight: "26px",
    verticalAlign: "middle",
    marginRight: "auto",
    fontSize: "12px",
    order: 1,
  },
  ".kol-pagination-item": {
    display: "inline-block",
    minWidth: 30,
    height: 30,
    marginRight: 4,
    lineHeight: "30px",
    textAlign: "center",
    verticalAlign: "middle",
    listStyle: "none",
    backgroundColor: "#fff",
    borderRadius: "50%",
    outline: 0,
    cursor: "pointer",
    userSelect: "none",
    fontSize: "14px",
    order: 3,
  },
  ".kol-pagination-item a": {
    display: "block",
    color: "black",
    transition: "none",
  },
  ".kol-pagination-item a:hover": {
    textDecoration: "none",
  },
  ".kol-pagination-item:focus, .kol-pagination-item:hover": {
    color: "black",
    transition: "all 0.3s",
  },
  ".kol-pagination-item:focus a, .kol-pagination-item:hover a": {
    color: "black",
  },
  ".kol-pagination-item-active": {
    fontWeight: 500,
    color: "black",
    background: "red",
  },
  ".kol-pagination-item-active a": {
    color: "black",
  },
  ".kol-pagination-item-active:focus, .kol-pagination-item-active:hover": {
    color: "black",
  },
  ".kol-pagination-item-active:focus a, .kol-pagination-item-active:hover a": {
    color: "black",
  },
  ".kol-pagination-jump-prev, .kol-pagination-jump-next": {
    outline: 0,
  },
  ".kol-pagination-jump-prev button, .kol-pagination-jump-next button": {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "black",
  },
  ".kol-pagination-jump-prev button:after, .kol-pagination-jump-next button:after":
    {
      display: "block",
      content: "'...'",
      fontSize: 14,
    },
  ".kol-pagination-prev, .kol-pagination-jump-prev, .kol-pagination-jump-next":
    {
      marginRight: 4,
    },
  ".kol-pagination-prev, .kol-pagination-next, .kol-pagination-jump-prev, .kol-pagination-jump-next":
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      color: "black",
      lineHeight: "20px",
      textAlign: "center",
      listStyle: "none",
      borderRadius: theme.radii.sm,
      cursor: "pointer",
      transition: "all 0.3s",
      order: 3,
      "&:hover": {
        color: "black",
      },
    },
  ".kol-pagination-prev, .kol-pagination-next": {
    outline: 0,
  },
  ".kol-pagination-prev button, .kol-pagination-next button": {
    color: "black",
    cursor: "pointer",
    userSelect: "none",
  },
  ".kol-pagination-prev:hover button, .kol-pagination-next:hover button": {
    color: "black",
  },
  ".kol-pagination-prev .kol-pagination-item-link, .kol-pagination-next .kol-pagination-item-link":
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      fontSize: 24,
      textAlign: "center",
      backgroundColor: "#fff",
      outline: "none",
      transition: "all 0.3s",
    },
  ".kol-pagination-prev:focus .kol-pagination-item-link, .kol-pagination-prev:hover .kol-pagination-item-link, .kol-pagination-next:focus .kol-pagination-item-link, .kol-pagination-next:hover .kol-pagination-item-link":
    {
      color: "black",
      borderColor: "red",
    },
  ".kol-pagination-prev button:after": {
    content: "'‹'",
    display: "block",
  },
  ".kol-pagination-next button:after": {
    content: "'›'",
    display: "block",
  },
  ".kol-pagination-disabled, .kol-pagination-disabled:hover, .kol-pagination-disabled:focus":
    {
      cursor: "not-allowed",
    },
  ".kol-pagination-disabled .kol-pagination-item-link, .kol-pagination-disabled:hover .kol-pagination-item-link, .kol-pagination-disabled:focus .kol-pagination-item-link":
    {
      color: "rgba(0,0,0,0.25)",
      borderColor: "#d9d9d9",
      cursor: "not-allowed",
    },
  ".kol-pagination-slash": {
    margin: "0 10px 0 5px",
  },
  ".kol-pagination-options": {
    display: "flex",
    alignItems: "center",
    marginRight: 8,
    verticalAlign: "middle",
    order: 2,
    position: "relative",
    ".kol-select": {
      width: 96,
    },
    "&:before": {
      content: '"Rows per page"',
      fontSize: "14px",
      marginRight: 8,
    },
  },
  ".kol-select-show-arrow .kol-select-arrow-icon::after": {
    borderTopColor: "red",
  },
  "@media all and (-ms-high-contrast: none)": {
    ".kol-pagination-options *::-ms-backdrop, .kol-pagination-options": {
      verticalAlign: "top",
    },
  },
  ".kol-pagination-options-size-changer.rc-select": {
    display: "inline-block",
    width: "auto",
    marginRight: 8,
  },
  ".kol-select-single .kol-select-selector .kol-select-selection-item, .kol-select-single .kol-select-selector .kol-select-selection-placeholder":
    {
      height: "30px",
      lineHeight: "30px",
    },
  ".kol-pagination-options-quick-jumper": {
    display: "inline-block",
    height: 30,
    lineHeight: "30px",
    verticalAlign: "top",
  },
  ".kol-pagination-options-quick-jumper input": {
    width: 50,
    margin: "0 8px",
  },
  ".kol-pagination-simple .kol-pagination-prev, .kol-pagination-simple .kol-pagination-next":
    {
      height: 24,
      lineHeight: "24px",
      verticalAlign: "top",
    },
  ".kol-pagination-simple .kol-pagination-prev .kol-pagination-item-link, .kol-pagination-simple .kol-pagination-next .kol-pagination-item-link":
    {
      height: 24,
      backgroundColor: "transparent",
      border: 0,
    },
  ".kol-pagination-simple .kol-pagination-prev .kol-pagination-item-link::after, .kol-pagination-simple .kol-pagination-next .kol-pagination-item-link::after":
    {
      height: 24,
      lineHeight: "24px",
    },
  ".kol-pagination-simple .kol-pagination-simple-pager": {
    display: "inline-block",
    height: 24,
    marginRight: 8,
  },
  ".kol-pagination-simple .kol-pagination-simple-pager input": {
    boxSizing: "border-box",
    height: "100%",
    marginRight: 8,
    padding: "0 6px",
    textAlign: "center",
    backgroundColor: "#fff",
    border: "1px solid #d9d9d9",
    borderRadius: theme.radii.sm,
    outline: "none",
    transition: "border-color 0.3s",
  },
  ".kol-pagination-simple .kol-pagination-simple-pager input:hover": {
    borderColor: "red",
  },
  ".kol-pagination.kol-pagination-disabled": {
    cursor: "not-allowed",
  },
  ".kol-pagination.kol-pagination-disabled .kol-pagination-item": {
    background: "hsv(0,0,96%)",
    borderColor: "#d9d9d9",
    cursor: "not-allowed",
  },
  ".kol-pagination.kol-pagination-disabled .kol-pagination-item a": {
    color: "rgba(0,0,0,0.25)",
    background: "transparent",
    border: "none",
    cursor: "not-allowed",
  },
  ".kol-pagination.kol-pagination-disabled .kol-pagination-item-active": {
    background: "red",
    borderColor: "transparent",
  },
  ".kol-pagination.kol-pagination-disabled .kol-pagination-item-active a": {
    color: "#fff",
  },
  ".kol-pagination.kol-pagination-disabled .kol-pagination-item-link": {
    color: "rgba(0,0,0,0.25)",
    background: "hsv(0,0,96%)",
    borderColor: "#d9d9d9",
    cursor: "not-allowed",
  },
  ".kol-pagination.kol-pagination-disabled .kol-pagination-item-link-icon": {
    opacity: 0,
  },
  ".kol-pagination.kol-pagination-disabled .kol-pagination-item-ellipsis": {
    opacity: "1",
  },
  "@media only screen and (max-width: 992px)": {
    ".kol-pagination-item-after-jump-prev, .kol-pagination-item-before-jump-next":
      {
        display: "none",
      },
  },
  "@media only screen and (max-width: 576px)": {
    ".kol-pagination-options": {
      display: "none",
    },
  },
  ".kol-pagination .kol-select-selector": {
    height: 30,
    width: 96,
  },
});
