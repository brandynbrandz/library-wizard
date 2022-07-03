import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FooterButtons from "../components/FooterButtons";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  FormErrorMessage,
} from "@chakra-ui/react";
import ProgressNav from "../components/ProgressNav";
import { connect } from "react-redux";

const InformationPage = () => {
  const [mustInput1, setMustInput1] = useState("");
  const [mustInput2, setMustInput2] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState(true);

  const handleInputChange = (e) => setInput(e.target.value);

  const submitForm = () => {
    if (mustInput1 && mustInput2) {
      return setError(false);
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    submitForm();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mustInput1, mustInput2, input]);
  const isError1 = mustInput1 === "";
  const isError2 = mustInput2 === "";
  return (
    <>
      <Flex w={"100%"} justify={"center"}>
        <Box w="70%" pl="40px" pr="40px" pb="20px" mt="10%" borderWidth="2px">
          <ProgressNav />
          <FormControl isRequired isInvalid={isError1}>
            <FormLabel htmlFor="book-title">Book title</FormLabel>
            <Input
              id="book-title"
              placeholder="Book title"
              onChange={(e) => setMustInput1(e.target.value)}
              value={mustInput1}
            />
            {isError1 && (
              <FormErrorMessage>Book Title is required.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="author">Author</FormLabel>
            <Select id="author" placeholder="Author">
              <option>Mr. B</option>
              <option>Ohayo</option>
            </Select>
          </FormControl>
          <FormControl mt="1rem" isRequired isInvalid={isError2}>
            <FormLabel htmlFor="isbn">ISBN</FormLabel>
            <Input
              id="isbn"
              placeholder="ISBN"
              onChange={(e) => setMustInput2(e.target.value)}
              value={mustInput2}
            />
            {isError2 && <FormErrorMessage>ISBN is required.</FormErrorMessage>}
          </FormControl>
          <FormControl mt="1rem">
            <FormLabel htmlFor="publisher">Publisher</FormLabel>
            <Select id="publisher" placeholder="Publisher">
              <option>Mr. B</option>
              <option>Ohayo</option>
            </Select>
          </FormControl>
          <FormControl mt="1rem" isRequired w="25%">
            <FormLabel htmlFor="date-published">Date published</FormLabel>
            <Input id="date-published" placeholder="DD/MM/YYYY" />
          </FormControl>
          <FormControl mt="1rem" isRequired w="25%">
            <FormLabel htmlFor="number-of-pages">Number of pages</FormLabel>
            <Input id="number-of-pages" placeholder="Number of pages" />
          </FormControl>
          <FormControl mt="1rem" w="25%">
            <FormLabel htmlFor="format">Format</FormLabel>
            <Select id="format" placeholder="Format">
              <option>PDF</option>
              <option>Ohayo</option>
            </Select>
          </FormControl>
          <Flex gap={"3rem"} align={"center"} justify={"space-between"} w="55%">
            <Box width={"100%"}>
              <FormControl mt="1rem" isRequired>
                <FormLabel htmlFor="isbn">Edition</FormLabel>
                <Input
                  id="isbn"
                  placeholder="Edition"
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl mt="1rem">
                <FormLabel htmlFor="edition-language">
                  Edition language
                </FormLabel>
                <Select id="edition-language" placeholder="Edition language">
                  <option>English</option>
                  <option>French</option>
                </Select>
              </FormControl>
            </Box>
          </Flex>
          <FormControl mt="1rem" isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea id="description" placeholder="Type the description" />
          </FormControl>

          <FooterButtons error={error} setError={setError} />
        </Box>
      </Flex>
    </>
  );
};

export default connect((state) => ({
  genres_state: state.wizardReducer,
}))(InformationPage);
