import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { resetAll } from "../store/actions";
import { connect } from "react-redux";

const SuccessPage = ({dispatch}) => {
    const goToHomePage = () => {
        dispatch(resetAll())
      };
  return (
    <>
      <Flex justify={"center"} w="100%">
        <Box textAlign={"center"}>
          <Image
            w={"20rem"}
            h={"20rem"}
            src="https://icons.veryicon.com/png/o/miscellaneous/cloud-call-center/success-24.png"
          />
          <Text fontSize={"16px"} fontWeight={"bold"}>
            Book added successfully
          </Text>
          <Button
            mt="3rem"
            mb="5rem"
            _focus={{ borderColor: "none" }}
            w="25rem"
            h={"4rem"}
            bg="grey"
            color={"#fff"}
            _hover={{ opacity: "0.8" }}
            onClick={goToHomePage}
          >
            Add another book
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default connect((state) => ({
    genres_state: state.wizardReducer,
  }))(SuccessPage);
