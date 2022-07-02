import React, { useEffect, useState } from "react";
import FooterButtons from "../components/FooterButtons";
import { Box, Checkbox, Flex, Text, Input } from "@chakra-ui/react";
import ProgressNav from "../components/ProgressNav";
import { connect } from "react-redux";

const AddSubgenrePage = () => {
  const defaultForm = {
    name: "",
    isDescriptionRequired: true,
  };
  const [formName, setFormName] = useState("");
  const [formCheckbox,setFormCheckbox] = useState(false)
  const [error, setError] = useState(true);

  const submitForm = () => {
    if (formName) {
      return setError(false);
    } else {
      setError(true);
    }
  };
  const submission={
    name: formName,
    isDescriptionRequired:formCheckbox
};
  useEffect(() => {
    submitForm();

//eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formName,formCheckbox]);

  return (
    <>
      <Flex w={"100%"} justify={"center"}>
        <Box w="56%" mt="4rem">
          <ProgressNav />
          <Input placeholder={"Subgenre name"} value={formName} onChange={(e) => setFormName(e.target.value)} />
          <Flex mt="2rem" align={"center"} gap={"2rem"}>
            <Checkbox size={"lg"} isChecked={formCheckbox} onChange={(e) => setFormCheckbox(e.target.checked)} />
            <Text>Description is required for this subgenre</Text>
          </Flex>
          <FooterButtons
            initial={defaultForm}
            error={error}
            form={submission}
            setError={setError}
          />
        </Box>
      </Flex>
    </>
  );
};

export default connect((state) => ({
    genres_state: state.wizardReducer,
  }))(AddSubgenrePage);
