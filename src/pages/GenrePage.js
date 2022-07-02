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
        <Box w="56%">
          <ProgressNav />
          <Flex mt="10rem" flexWrap={"wrap"} gap={"5rem"}>
            {registration_state?.genres_collection.map((genre) => (
              <Button
                key={genre.id}
                _focus={{ borderColor: "none" }}
                w="16rem"
                h={"6rem"}
                color={
                  genre.id === registration_state?.selected_genre[0]?.id
                    ? "#fff"
                    : "black"
                }
                fontSize={"16px"}
                bg={
                  genre.id === registration_state?.selected_genre[0]?.id
                    ? "grey"
                    : "#fff"
                }
                border={"1px solid grey"}
                _hover={{ bg: "grey", color: "#fff" }}
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
