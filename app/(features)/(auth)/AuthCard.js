import { Box, Stack } from "@chakra-ui/react";

const AuthCard = ({ logo, children }) => (
  //   <Box className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
  <Stack
    justify={{ base: "start", sm: "center" }}
    align={"center"}
    minH={"100dvh"}
    pt={{ base: "6", sm: "0" }}
    bg={"gray.50"}
  >
    <Box h={130} w={130}>
      {logo}
    </Box>

    <Box
      w="full"
      maxW={{ sm: "md" }}
      mt={6}
      px={6}
      py={4}
      bgColor="white"
      shadow="md"
      overflow="hidden"
      rounded={{ sm: "lg" }}
    >
      {children}
    </Box>
  </Stack>
);

export default AuthCard;
