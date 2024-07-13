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
  Toast,
} from "@chakra-ui/react";
import Link from "next/link";

import { FormEvent, useState } from "react";
import axios from "axios";
import { Router, useRouter } from "next/router";

const RegisterPage: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const register = (e: FormEvent) => {
    e.preventDefault();
    console.log("login");
    axios
      .post("http://localhost:5000/api/v1/user/register", {
        name: name,
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        router.push("/login");
        Toast({
          title: response.data.msg,
          status: "success",
          isClosable: true,
        });
      })
      .catch(function (error) {
        console.log(error);
        Toast({
          title: error.response.data.msg,
          status: "error",
          isClosable: true,
        });
      });
  };
  return (
    <Container mt="36">
      <Card>
        <CardBody>
          <Heading mb="30px" textAlign="center">
            Register
            <Avatar bg="red.500" />
          </Heading>
          <form onSubmit={register}>
            <FormLabel>Full Name</FormLabel>
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              h="14"
              placeholder="Enter your full name"
              type="text"
            />
            <FormLabel mt="20px">Email</FormLabel>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              h="14"
              placeholder="Enter your email"
              type="email"
            />
            <FormLabel mt="20px">Password</FormLabel>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              h="14"
              placeholder="Create passwords"
              type="password"
            />
            <Button
              type="submit"
              mt="50px"
              h="14"
              width="100%"
              colorScheme="messenger"
            >
              Register
            </Button>
          </form>

          <Text fontSize="20px" mt="24" textAlign="center" color="red">
            already have an account?? <Link href="/login">Login</Link>
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
};
export default memo(RegisterPage);
