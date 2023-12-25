import { LuPencilLine, LuPlus } from "react-icons/lu";

import { useState, useRef, useEffect } from "react";
import { Avatar, Box, Button, Flex, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useChannels } from "../contexts/channel-context";

export function RightSideNav() {
  const [overview, setOverview] = useState("概要を入力");
  const [toggleOverview, setToggleOverview] = useState(false);

  // BUG: 正しくテキストエリアをフォーカスしない
  const overviewRef = useRef(null);

  let { id } = useParams();
  id = id ?? "0";
  const channel = useChannels().filter((channel) => channel.channel_id === parseInt(id[0]))[0];
  useEffect(() => {
    setOverview(channel.overview);
  }, [id]);

  return (
    <Box m={1} maxH={"calc(100dvh - 40px)"}>
      <Box h={"40dvh"}>
        <HStack p={1} h={"12"} justify={"space-between"} borderBottom={"1px solid"} borderColor={"gray.400"}>
          <Text>概要</Text>
          <Button
            color={"blackalpha.700"}
            p={0}
            onClick={() => {
              setToggleOverview(!toggleOverview);
              if (overviewRef.current) {
                overviewRef.current.focus();
              }
            }}
          >
            <LuPencilLine size="24px" />
          </Button>
        </HStack>
        <Flex w={"100%"} h={"80%"}>
          <Box flex={1} pt={4}>
            {toggleOverview ? (
              // `編集中`
              <Textarea
                bgColor={"white"}
                value={overview}
                p={1}
                h={"100%"}
                ref={overviewRef}
                onChange={(e) => setOverview(e.target.value)}
                resize={"none"}
              />
            ) : (
              <Text pl={2}>{overview}</Text>
            )}
          </Box>
        </Flex>
      </Box>
      <Box h={"100%"}>
        <HStack p={1} h={12} justify={"space-between"} borderBottom={"1px solid"} borderColor={"gray.400"}>
          <Text>タスク</Text>
          <LuPlus size="24px" />
        </HStack>
        <Box pt={4} w={"100%"} h={100} overflow={"auto"} bgColor={"green.100"}>
          ここにタスク Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, inventore. At deleniti, error et
          numquam molestias architecto vitae! Suscipit in ea ad repudiandae dolorum libero esse accusantium iure
          delectus dolorem. Nemo quidem distinctio cum similique nulla exercitationem ea culpa repellendus consectetur
          harum, molestiae inventore quas sed officiis sapiente obcaecati temporibus alias beatae modi! Maiores, maxime
          molestiae quos adipisci veritatis impedit. Natus aspernatur non reiciendis labore quaerat, velit alias quae
          sint explicabo ipsam? Unde culpa excepturi neque aspernatur repellat hic ad? Doloribus ipsam quaerat obcaecati
          impedit totam accusamus alias ipsum ad? Eaque suscipit error magni maiores enim. Adipisci, cupiditate libero.
          Praesentium deleniti accusantium repellendus, aspernatur illo sunt esse voluptates autem earum minus, quisquam
          aut consequuntur harum sequi exercitationem non natus. Dolores. Labore laborum, voluptate debitis quos aliquam
          quas facilis, repellat magni neque illum cum, rerum quae commodi nisi alias. Tempore nemo necessitatibus
          commodi vel provident dolorum magnam esse velit quia laborum. Excepturi, magni aliquam. Repudiandae modi iure
          quam dolorem perspiciatis ipsam odit cum, numquam facere corrupti doloremque excepturi, aliquam dolore
          incidunt, minima voluptate perferendis et tenetur amet magni dicta quasi hic. Earum impedit quae quisquam
          itaque tempora, delectus consequatur laudantium nesciunt voluptatum vitae dolore nulla similique corrupti.
          Placeat vitae atque illum excepturi vel repudiandae, ullam est, sed nostrum esse, quae quia! Corporis quos
          facere velit aperiam suscipit adipisci voluptatem itaque tenetur autem sunt ipsa nihil deleniti quas, aliquam
          culpa quasi. Debitis illo odio voluptates alias esse consequuntur hic excepturi adipisci culpa! Quod possimus
          quisquam temporibus labore deleniti minus enim, dolorum et natus doloremque totam perspiciatis a odit ipsam
          cupiditate iusto aspernatur quo consectetur eos repudiandae corporis pariatur voluptas. Atque, praesentium
          amet. Blanditiis aliquam illum, quod architecto rem tenetur alias adipisci labore. Magnam perspiciatis enim
          aut nesciunt rerum. Ab fugit sed culpa necessitatibus, neque cupiditate, quaerat excepturi nihil dignissimos
          architecto, corporis veritatis!
        </Box>
      </Box>
    </Box>
  );
}
