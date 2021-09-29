import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaGoogle } from "react-icons/fa";
import inGoogle from "./auth";

function login() {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      maxW="100vw"
      bg="#1A2238"
    >
      <Flex
        direction="column"
        maxW="1000px"
        minH="300px"
        justifyContent="center"
        textAlign="center"
        color="white"
        mb="7rem"
      >
        <Text fontSize="1em" fontWeight="bold">
          Welcome to
        </Text>
        <Text fontSize="3em" fontWeight="bold" lineHeight="1">
          TapCo<span style={{ color: "#FF6A3D" }}>py</span>
        </Text>
        <Button
          mt="3em"
          colorScheme="teal"
          variant="outline"
          onClick={() => inGoogle()}
        >
          sign in with <FaGoogle></FaGoogle>
        </Button>
      </Flex>
    </Flex>
  );
}

export default login;
