import { Box, HStack, Skeleton } from "@chakra-ui/react";

export default function RoomSkeleton() {
  return (
    <Box>
      <Skeleton rounded="2xl" height={329} mb={5} />
      <HStack justifyContent={"space-between"}>
        <Skeleton rounded="lg" width="60%" height={5} />
        <Skeleton rounded="lg" width="15%" height={5} />
      </HStack>
      <Skeleton rounded="lg" width="40%" height={3} mt={1} mb={5} />
      <Skeleton rounded="lg" width="25%" height={3} />
    </Box>
  );
}
