import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { connect } from "react-redux";

const ProgressNav = ({ registration_state }) => {
  let init = 1;
  return (
    <Flex w={"100%"} justify={"center"}>
      <Box mt="3rem" w="100%">
        <Text ml="3rem" fontWeight={"bold"} fontSize={"16px"}>
          Add book - New book
        </Text>
        <Flex align={"center"}>
          <Flex align={"center"}>
            <Step
              step={init}
              active={registration_state.pages === init ? true : false}
              name="Genre"
            />
            <Box mb="1.2rem" w={"150px"} borderBottom={"2px solid grey"} />
          </Flex>
          <Flex align={"center"}>
            <Step
              step={init + 1}
              active={registration_state.pages === init + 1 ? true : false}
              name="SubGenre"
            />
            <Box mb="1.2rem" w={"150px"} borderBottom={"2px solid grey"} />
          </Flex>
          <Flex align={"center"}>
            <Step
              step={registration_state.pages < 3 ? "..." : 3}
              active={registration_state.pages === init + 2 ? true : false}
              name={registration_state.pages < 3 ? "." : "Add new subgenre"}
            />
            {registration_state.pages === 4 && (
              <Box mb="1.2rem" w={"150px"} borderBottom={"2px solid grey"} />
            )}
          </Flex>
          {registration_state.pages === 4 && (
            <Flex align={"center"}>
              <Step
                step="4"
                active={registration_state.pages === init + 2 ? true : false}
                name="Information"
              />
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

const Step = ({ active, step, name, children, ...rest }) => {
  return (
    <>
      <Flex m="2rem" direction={"column"} align={"center"} w="25%">
        <Flex
          align={"center"}
          justify={"center"}
          color={active ? "#fff" : "black"}
          {...rest}
          bg={active ? "grey" : "#b2caf3"}
          h={"4rem"}
          w={"4rem"}
          borderRadius={"100%"}
        >
          {step}
        </Flex>
        <Text textAlign={"center"} fontFamily={"bold"} fontSize={"12px"} fontWeight={"bold"}>
          {name}
        </Text>
      </Flex>
    </>
  );
};

export default connect((state) => ({
  registration_state: state.wizardReducer,
}))(ProgressNav);
