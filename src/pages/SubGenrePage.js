import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";
import FooterButtons from "../components/FooterButtons";
import ProgressNav from "../components/ProgressNav";
import { addSelectedSubGenre, setPage } from "../store/actions";

const SubGenrePage = ({ registration_state, dispatch }) => {
  const handleClick = (id) => {
    dispatch(addSelectedSubGenre(id));
  };
  const goToAddSubgenre = () => {
    dispatch(setPage("next", 1));
  };
  return (
    <>
      <Flex w={"100%"} justify={"center"}>
        <Box w="56%">
          <ProgressNav />
          <Flex mt="10rem" flexWrap={"wrap"} gap={"5rem"}>
            {registration_state?.selected_genre[0]?.subgenres.map((genre) => (
              <Button
                key={genre.id}
                w="16rem"
                h={"6rem"}
                _focus={{ borderColor: "none" }}
                fontSize={"16px"}
                color={registration_state?.selected_subgenre[0]?.id === genre.id ? "#fff" : "black"}
                bg={registration_state?.selected_subgenre[0]?.id === genre.id ? "grey" : "#fff"}
                border={"1px solid grey"}
                _hover={{ bg: "grey", color: "#fff" }}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </Button>
            ))}
            <Button
              w="16rem"
              h={"6rem"}
              fontSize={"16px"}
              _focus={{ borderColor: "none" }}
              bg="#fff"
              border={"1px solid grey"}
              _hover={{ bg: "grey", color: "#fff" }}
              onClick={goToAddSubgenre}
            >
              Add new
            </Button>
          </Flex>
          <FooterButtons />
        </Box>
      </Flex>
    </>
  );
};

export default connect((state) => ({
  registration_state: state.wizardReducer,
}))(SubGenrePage);
