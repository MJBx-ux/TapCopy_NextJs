import { Flex, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import React from "react";
import { FaPlusCircle, FaCopy, FaTrash } from "react-icons/fa";
import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";

function Fields(prop) {
  const toast = useToast();
  const { title, val } = prop;
  console.log(title, val);

  const handleCpy = () => {
    val.select;
    navigator.clipboard.writeText(val);
    toast({
      title: "Copied!!",
      description: `${val} is Copied to your Clipboard`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  const handleDelet = () => {
    toast({
      title: "Upgrade to Pro👑",
      description: "to Unlock this feature",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" mb="1em">
      <Text>{title} </Text>
      <Flex direction="row">
        <InputGroup size="md">
          <Input pr="4.5rem" value={val} readOnly="true" color="grey" />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              colorScheme="blue"
              onClick={() => handleCpy()}
            >
              <FaCopy></FaCopy>
            </Button>
            <Button
              h="1.75rem"
              size="sm"
              colorScheme="red"
              m="0 3px "
              onClick={() => handleDelet()}
            >
              <FaTrash></FaTrash>
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}

export default Fields;
