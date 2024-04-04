"use client";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Link,
  useToast,
  FormErrorMessage,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/auth";
import { useEffect, useState } from "react";
import AuthSessionStatus from "@/app/(features)/(auth)/AuthSessionStatus";

const Login = () => {
  const router = useRouter();
  const toast = useToast();

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/chat",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  }, [status, router.reset, errors.length]);

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <>
      {/* <AuthSessionStatus status={status} /> */}
      <Box as="form" onSubmit={submitForm}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} isRequired autoFocus />
          {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
        </FormControl>

        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} isRequired />
          {errors.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
        </FormControl>

        <Checkbox id="remember_me" mt={4} onChange={(e) => setShouldRemember(e.target.checked)}>
          Remember me
        </Checkbox>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
          <Link href="/forgot-password">Forgot your password?</Link>
          <Spacer />
          <Link href="/register" mr={3}>
            Register
          </Link>
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
