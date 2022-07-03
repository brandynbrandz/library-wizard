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
        <Box w="70%" pl="40px" pr="40px" pb="20px" mt="10%" borderWidth="2px">
          <ProgressNav />
          <Flex mt="2rem" flexWrap={"wrap"} gap={"2rem"}>
            {registration_state?.selected_genre[0]?.subgenres.map((genre) => (
              <Button
                key={genre.id}
                w="10rem"
                h={"3rem"}
                _focus={{ borderColor: "none" }}
                fontSize={"16px"}
                color={
                  registration_state?.selected_subgenre[0]?.id === genre.id
                    ? "#fff"
                    : "black"
                }
                bg={
                  registration_state?.selected_subgenre[0]?.id === genre.id
                    ? "grey"
                    : "#fff"
                }
                border={"1px solid gray"}
                _hover={{ bg: "gray", color: "#fff" }}
                onClick={() => handleClick(genre.id)}
              >
                {genre.name}
              </Button>
            ))}
            <Button
              w="10rem"
              h={"3rem"}
              fontSize={"16px"}
              _focus={{ borderColor: "none" }}
              bg="#fff"
              border={"1px solid gray"}
              _hover={{ bg: "gray", color: "#fff" }}
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
