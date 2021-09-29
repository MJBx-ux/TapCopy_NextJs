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

function Dahsboard({ name, uid }) {
  const [objData, setobjData] = useState([]);

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
      console.log("Current data: ", doc.data().arr);
      setobjData(doc.data().arr);
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

        <Divider m="2em 0" />
        <Flex wrap="wrap" justifyContent="space-between">
          {" "}
          {objData ? (
            objData.map((i) => {
              return (
                <>
                  <Fields title={i.title} val={i.value}></Fields>
                </>
              );
            })
          ) : (
            <Text>Opps! Your Store is Empty</Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dahsboard;
