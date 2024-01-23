"use client";

import { useState } from "react";
import {
  Link as ChakraLink,
  Box,
  Flex,
  Input as ChakraInput,
  Button as ChakraButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useAuth } from "@/app/hooks/auth";

const Page = () => {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/chat",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    console.log("clicked");
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <Box as="form" onSubmit={submitForm}>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <ChakraInput value={name} onChange={(event) => setName(event.target.value)} autoFocus />
        <FormErrorMessage>{errors.name}</FormErrorMessage>
      </FormControl>

      <FormControl id="email" mt={4} isRequired>
        <FormLabel>Email</FormLabel>
        <ChakraInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <FormErrorMessage>{errors.email}</FormErrorMessage>
      </FormControl>

      <FormControl id="password" mt={4} isRequired>
        <FormLabel>Password</FormLabel>
        <ChakraInput
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="new-password"
        />
        <FormErrorMessage>{errors.password}</FormErrorMessage>
      </FormControl>

      <FormControl id="passwordConfirmation" mt={4} isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <ChakraInput
          type="password"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
        <FormErrorMessage>{errors.password_confirmation}</FormErrorMessage>
      </FormControl>

      <Flex justify="end" mt={4}>
        <ChakraLink
          href="/login"
          color="gray.600"
          _hover={{ color: "gray.900" }}
          fontSize="sm"
          textDecoration="underline"
        >
          Already registered?
        </ChakraLink>
        <ChakraButton ml={4} type="submit">
          Register
        </ChakraButton>
      </Flex>
    </Box>
  );
};

export default Page;
