import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";
import { addSelectedGenre } from "../store/actions";
import FooterButtons from "../components/FooterButtons";
import ProgressNav from "../components/ProgressNav";

const GenrePage = ({ registration_state, dispatch }) => {
  const handleClick = (id) => {
    dispatch(addSelectedGenre(id));
  };
  return (
    <>
      <Flex w={"100%"} justify={"center"}>
        <Box w="70%" pl="40px" pr="40px" pb="20px" mt="10%" borderWidth="2px">
          <ProgressNav />
          <Flex mt="2rem" flexWrap={"wrap"} gap={"2rem"}>
            {registration_state?.genres_collection.map((genre) => (
              <Button
                key={genre.id}
                _focus={{ borderColor: "none" }}
                w="10rem"
                h={"3rem"}
                color={
                  genre.id === registration_state?.selected_genre[0]?.id
                    ? "#fff"
                    : "black"
                }
                fontSize={"16px"}
                bg={
                  genre.id === registration_state?.selected_genre[0]?.id
                    ? "gray"
                    : "#fff"
                }
                border={"1px solid gray"}
                _hover={{ bg: "gray", color: "#fff" }}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </Button>
            ))}
          </Flex>
          <FooterButtons />
        </Box>
      </Flex>
    </>
  );
};

export default connect((state) => ({
  registration_state: state.wizardReducer,
}))(GenrePage);
