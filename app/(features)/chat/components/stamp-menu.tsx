import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Portal,
  Flex,
  Box,
} from "@chakra-ui/react";
import { AiOutlineSmile } from "react-icons/ai";

import sampleStamp from "../assets/sample-stamp.png";
import Image from "next/image";

export function StampMenu() {
  const stamps = new Array(17).fill(null).map((_,i) => (
    <Button key={i} colorScheme="blue" aspectRatio={1 / 1} h={"100px"}>
      画像
    </Button>
  ));

  return (
    <Popover placement="top-end">
      <PopoverTrigger>
        <Button color={"blackAlpha.700"} p={0}>
          <AiOutlineSmile size={"28px"} />
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent w={"auto"} h={"440px"}>
          <PopoverArrow />
          <PopoverHeader>スタンプ</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody overflowY={"scroll"}>
            <Flex gap={2} wrap={"wrap"} maxW={"316px"}>
              <Button p={0} colorScheme="blue" aspectRatio={1 / 1} h={"100px"}>
                <Box
                  rounded={"lg"}
                  overflow={"hidden"}
                  _hover={{ transform: "scale(1.1)" }}
                  transition={"transform 0.2s"}
                >
                  <Image src={sampleStamp} alt="stamp" />
                </Box>
              </Button>
              {stamps}
            </Flex>
          </PopoverBody>
          {/* <PopoverFooter>This is the footer</PopoverFooter> */}
        </PopoverContent>
      </Portal>
    </Popover>
  );
}
