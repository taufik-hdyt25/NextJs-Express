import { useState } from "react";
import axios from "axios";
import { ICreateProduct, IProduct } from "./Products.types";
import { useDisclosure } from "@chakra-ui/react";

export const useProductAction = (token?: string) => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [meta, setMeta] = useState<any | null>(null);
  const { isOpen, onToggle, onClose } = useDisclosure();

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getListProduct = (p?: number) => {
    axios
      .get(
        `http://localhost:5000/api/v1/product?page=${p ?? 1}&limit=8&search`,
        config
      )
      .then(function (response) {
        console.log(response);
        setProducts(response.data.data);
        setMeta(response.data.meta);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addProduct = (data: ICreateProduct) => {
    console.log("addProduct");
    axios
      .post("http://localhost:5000/api/v1/product/createproduct", data)
      .then(function (response) {
        console.log(response);
        getListProduct();
        onClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    products,
    getListProduct,
    addProduct,
    isOpen,
    onClose,
    onToggle,
    meta,
  };
};
