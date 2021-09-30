import { Divider, Flex, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { FaPowerOff, FaPlusCircle } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { singout } from "./auth";
import Fields from "./Fields";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "./auth";
import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import InputModal from "./InputModal";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FaSearch } from "react-icons/fa";
import { BsCardHeading } from "react-icons/bs";

function Dahsboard({ name, uid }) {
  const [objData, setobjData] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  const fetch = async () => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setobjData(docSnap.data().arr);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      setobjData(null);
    }
  };
  useEffect(() => {
    try {
      fetch();
    } catch (error) {
      console.log(error.message);
    }

    onSnapshot(doc(db, "users", uid), (doc) => {
      console.log("Current data: ", doc.data());
      doc.data() ? setobjData(doc.data().arr) : null;
    });
  }, []);

  const handleAdd = () => {};
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      maxW="100vw"
      bg="#1A2238"
      p="0 2em"
    >
      <Flex
        direction="column"
        maxW="1000px"
        minH="700px"
        color="white"
        w="100%"
      >
        <Flex
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt={{ base: "40px", md: "20px", lg: "10px" }}
        >
          <Text fontSize="3xl" fontWeight="bold" mr="0.5em">
            <span style={{ color: "#FF6A3D" }}>👋Hey,</span>
            {name}
          </Text>
          <IconButton
            aria-label="Logout"
            variant="outline"
            icon={<FaPowerOff />}
            onClick={singout}
          />
        </Flex>
        {/* <Button
          mt="2em"
          w="10em"
          size="sm"
          rightIcon={<FaPlusCircle />}
          colorScheme="pink"
          variant="solid"
          onClick={() => {
            handleAdd();
          }}
        >
          Add fields
        </Button> */}
        {uid ? <InputModal Uid={uid}></InputModal> : null}
        <Divider m="2em 0 1em 0" />

        <Flex wrap="wrap" justifyContent="space-between" borderRadius="10px">
          {objData ? (
            <>
              {" "}
              <InputGroup mb="1em">
                <InputRightElement pointerEvents="none">
                  <FaSearch color="black"></FaSearch>
                </InputRightElement>
                <Input
                  variant="solid"
                  placeholder="search"
                  color="black"
                  onChange={(e) => {
                    setsearchTerm(e.target.value);
                  }}
                ></Input>
              </InputGroup>
              {objData
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.title
                      .toLowerCase()
                      .includes(searchTerm.toLocaleLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((i) => {
                  return (
                    <>
                      <Fields title={i.title} val={i.value}></Fields>
                    </>
                  );
                })}
            </>
          ) : (
            <Flex
              direction="column"
              justifyContent="center"
              width="100%"
              textAlign="center"
            >
              <Flex
                m="20px auto"
                fontSize="3em"
                bg="grey"
                p="30px"
                borderRadius="50%"
              >
                <BsCardHeading></BsCardHeading>
              </Flex>
              <Text fontWeight="semibold" color="grey">
                Your Store is Empty
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dahsboard;
