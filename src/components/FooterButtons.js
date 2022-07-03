import React from "react";
import { connect } from "react-redux";
import { Button, Flex } from "@chakra-ui/react";
import { addSubgenre, setPage } from "../store/actions";

const FooterButtons = ({ registration_state, dispatch, ...props }) => {
  const nextStep = () => {
    if (registration_state.pages === 3) {
      dispatch(
        addSubgenre(registration_state?.selected_genre[0]?.id, props.form)
      );
    } else if (registration_state.pages === 4) {
      dispatch(setPage("next", 1));
    } else {
      let pageCount = registration_state.pages === 2 ? 2 : 1;
      dispatch(setPage("next", pageCount));
    }
  };
  const prevStep = () => {
    let pageCount = registration_state.pages === 4 ? 2 : 1;
    dispatch(setPage("prev", pageCount));
  };
  return (
    <>
      <Flex justify={"flex-end"} mt="2rem" align={"center"} gap={"20px"}>
        <Button
          _focus={{ borderColor: "none" }}
          border="1px solid grey"
          w="10rem"
          h={"3rem"}
          bg="#fff"
          onClick={prevStep}
          isDisabled={registration_state.pages === 1}
          _disabled={{ cursor: "not-allowed" }}
        >
          Back
        </Button>
        <Button
          _focus={{ borderColor: "none" }}
          w="10rem"
          h={"3rem"}
          bg="grey"
          color={"#fff"}
          onClick={nextStep}
          isDisabled={
            registration_state.pages === 5 ||
            (registration_state.pages === 1 &&
              registration_state.selected_genre.length < 1) ||
            (registration_state.pages === 2 &&
              registration_state.selected_subgenre.length < 1) ||
            (registration_state.pages === 3 && props.error) ||
            (registration_state.pages === 4 && props.error)
          }
          _hover={{ opacity: "0.8" }}
          _disabled={{ cursor: "not-allowed" }}
        >
          {registration_state.pages === 4 ? "Add" : "Next"}
        </Button>
      </Flex>
    </>
  );
};

export default connect((state) => ({
  registration_state: state.wizardReducer,
}))(FooterButtons);
