import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={20}
      columnGap={4}
      rowGap={8}
      templateColumns={"repeat(5, 1fr)"}
    >
      <VStack alignItems={"flex-start"}>
        <Box overflow={"hidden"} mb="2" rounded="3xl">
          <Image src="https://a0.muscache.com/im/pictures/5b6242a9-8832-432b-ac79-38de2a3d0b0d.jpg?im_w=720" />
        </Box>
        <Box>
          <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text display={"block"} as="b" noOfLines={1} fontSize="md">
              Ganggu-myeon, Yeongdeok-gun, 경상북도, 한국
            </Text>
            <HStack spacing={1}>
              <FaStar size={15} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize="sm" color={"gray.600"}>
            바다 전망
          </Text>
        </Box>
        <Text fontSize="sm" color={"gray.600"}>
          <Text as="b">$72</Text> / night
        </Text>
      </VStack>
    </Grid>
  );
}
