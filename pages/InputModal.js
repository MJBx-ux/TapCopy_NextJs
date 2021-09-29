import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { useDisclosure } from "@chakra-ui/hooks";
import { FormControl } from "@chakra-ui/form-control";
import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { FormLabel } from "@chakra-ui/form-control";
import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { db } from "./auth";
import { async } from "@firebase/util";

function InputModal({ Uid }) {
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, settitle] = useState("");
  const [value, setvalue] = useState("");

  const handleSave = async () => {
    document.getElementById("clBtn").click();
    toast({
      title: "Added Sucessfully",
      description: "We've added your new Data.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    await setDoc(
      doc(db, "users", Uid),
      {
        arr: arrayUnion({ title: title, value: value }),
      },
      { merge: true }
    );

    settitle("");
    setvalue("");
  };

  return (
    <>
      <Button
        mt="2em"
        w="10em"
        size="sm"
        rightIcon={<FaPlusCircle />}
        colorScheme="pink"
        variant="solid"
        onClick={onOpen}
      >
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#1a2237" color="white">
          <ModalHeader>Add New Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                required
                placeholder="Phone"
                onChange={(e) => settitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Value</FormLabel>
              <Input
                required
                placeholder="78352353"
                onChange={(e) => setvalue(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              isDisabled={title && value ? false : true}
              onClick={() => {
                handleSave();
              }}
            >
              Add
            </Button>
            <Button id="clBtn" onClick={onClose} bg="red.600">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default InputModal;
