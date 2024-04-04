import { Box, useToast } from "@chakra-ui/react";

export function TaskCompleteToast() {
  const toast = useToast();
  return (
    <Box
      //   colorScheme={"blue"}
      //   variant={"outline"}
      //   size={"xs"}
      onClick={() => {
        toast({
          title: "タスクを完了しました。",
          // description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }}
    >
      完了
    </Box>
  );
}
