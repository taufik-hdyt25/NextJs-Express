import { memo } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Container,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
//membuat koneksi login API
import { FormEvent, useState } from "react";
import axios from "axios";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

const LoginPage: React.FC = (): JSX.Element => {
  //menghubungkan api ke input username dan password
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //tampilan loading setelah klik login
  const [loading, setLoading] = useState<boolean>(false);
  //Toast ketika login berhasil dan salah password & Email
  const toast = useToast();
  //beralih page ktika login
  const router = useRouter();

  //menghubugnkan ke API login DB
  const login = (e: FormEvent) => {
    e.preventDefault();
    console.log("login");
    setLoading(true);
    axios
      .post("http://localhost:5000/api/v1/user/login", {
        email: username,
        password,
      })
      .then(function (response) {
        console.log(response);
        setCookie(null, "token", response.data.data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
        router.push("/");
        toast({
          title: response.data.msg,
          status: "success",
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.log(error);
        toast({
          title: error.response.data.msg,
          status: "error",
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container mt="40">
      <Card align="center">
        <CardBody>
          <Heading mb="30px" textAlign="center">
            Login
            <Avatar bg="red.500" />
          </Heading>

          <form onSubmit={login}>
            <FormLabel>Email</FormLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              h="14"
              placeholder="Enter your email"
              type="email"
            />
            <FormLabel mt="30px">Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              h="14"
              placeholder="Enter your password"
              type="password"
            />

            <Button
              type="submit"
              loadingText="Memuat"
              isLoading={loading}
              w="full"
              mt="50px"
              h="14"
              colorScheme="messenger"
            >
              Log in
            </Button>
          </form>

          <Text mt="28" textAlign="center" color="red">
            dont have account yet??{" "}
            <Link href="/register">Create an account</Link>
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
};
export default memo(LoginPage);
