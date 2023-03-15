import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import Room from "../components/Room";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: "10",
        lg: "40",
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {[
        1, 2, 3, 4, 5, 6, 7, 7, 2, 1, 21, 32, 1, 23, 3, 1, 2, 2, 3, 1, 2, 3, 1,
        23, 2, 123, 12, 3, 12, 3122, 2, 3, 4, 5, 1, 2, 3, 3, 4, 1, 2, 3, 4, 1,
        2, 3, 1, 2,
      ].map((index) => (
        <Room key={index} />
      ))}
    </Grid>
  );
}
