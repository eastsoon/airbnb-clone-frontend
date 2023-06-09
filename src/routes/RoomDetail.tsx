import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";
import { getRoom, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>([`room`, roomPk], getRoom);
  const { isLoading: isReviewsLoading, data: reviewsData } = useQuery<
    IReview[]
  >([`room`, roomPk, `reviews`], getRoomReviews);
  return (
    <Box
      mt={10}
      px={{
        base: "10",
        lg: "40",
      }}
    >
      <Skeleton height={"50px"} width="60%" isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt={8}
        rounded="xl"
        overflow={"hidden"}
        gap={2}
        height="60vh"
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h="100%" w="100%">
              <Image
                objectFit={"cover"}
                w="100%"
                h="100%"
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack w={"60%"} mt={10} justifyContent={"space-between"}>
        <VStack alignItems={"flex-start"}>
          <Skeleton isLoaded={!isLoading} height={"30px"}>
            <Heading fontSize={"2xl"}>
              House hosted by {data?.owner.name}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} height={"15px"}>
            <HStack justifyContent={"flex-start"} w="100%">
              <Text>
                {data?.rooms} room{data?.rooms === 1 ? "" : "s"}
              </Text>
              <Text>·</Text>
              <Text>
                {data?.toilets} toilet{data?.toilets === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar name={data?.owner.name} size={"lg"} src={data?.owner.avatar} />
      </HStack>
      <Box mt={10}>
        <Heading fontSize={"2xl"} mb={"5"}>
          <Skeleton isLoaded={!isReviewsLoading} height={"28px"} w={"30%"}>
            <HStack justifyContent={"flex-start"} w="100%">
              <FaStar />
              <Text>{data?.rating}</Text>
              <Text>·</Text>
              <Text>{reviewsData?.length}</Text>
              <Text>review{reviewsData?.length === 1 ? "" : "s"}</Text>
            </HStack>
          </Skeleton>
        </Heading>
        <Skeleton isLoaded={!isReviewsLoading} minH={"300px"} minW={"100px"}>
          <Container maxW="container.lg" marginX="none" mt={10}>
            <Grid gap={16} templateColumns={"1fr 1fr"}>
              {reviewsData?.map((review, index) => (
                <VStack alignItems={"flex-start"} key={index}>
                  <HStack>
                    <Avatar
                      name={review.user.name}
                      src={review.user.avatar}
                      size="md"
                    />
                    <VStack spacing={0} alignItems={"flex-start"}>
                      <Heading fontSize={"md"}>{review.user.name}</Heading>
                      <HStack spacing={1}>
                        <FaStar size="12px" />
                        <Text>{review.rating}</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                  <Text>{review.payload}</Text>
                </VStack>
              ))}
            </Grid>
          </Container>
        </Skeleton>
      </Box>
    </Box>
  );
}
