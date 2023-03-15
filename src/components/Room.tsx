import {
  Box,
  Button,
  color,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";
export default function Room() {
  const textColor = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position="relative" overflow={"hidden"} mb="2" rounded="2xl">
        <Image
          minH={280}
          src="https://a0.muscache.com/im/pictures/5b6242a9-8832-432b-ac79-38de2a3d0b0d.jpg?im_w=720"
        />
        <Button
          variant={"unstyled"}
          position="absolute"
          top={0}
          right={0}
          color="white"
        >
          <FaRegHeart size="20px" />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
            Ganggu-myeon, Yeongdeok-gun, 경상북도, 한국
          </Text>
          <HStack _hover={{ color: "gold" }} spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize="sm" color={textColor}>
          바다 전망
        </Text>
      </Box>
      <Text fontSize="sm" color={textColor}>
        <Text as="b">$72</Text> / night
      </Text>
    </VStack>
  );
}
