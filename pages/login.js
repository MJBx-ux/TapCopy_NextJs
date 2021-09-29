import { Button } from "@chakra-ui/button";
import { Flex, Text } from "@chakra-ui/layout";
import { FaGoogle } from "react-icons/fa";
import inGoogle from "./auth";

function login() {
  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      minH="100vh"
      maxW="100vw"
      bg="#1A2238"
      m="0"
    >
      <Flex
        direction="column"
        maxW="1000px"
        minH="300px"
        justifyContent="center"
        textAlign="center"
        color="white"
        mt="5rem"
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,192L26.7,176C53.3,160,107,128,160,133.3C213.3,139,267,181,320,176C373.3,171,427,117,480,117.3C533.3,117,587,171,640,213.3C693.3,256,747,288,800,298.7C853.3,309,907,299,960,288C1013.3,277,1067,267,1120,266.7C1173.3,267,1227,277,1280,250.7C1333.3,224,1387,160,1413,128L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </Flex>
  );
}

export default login;
