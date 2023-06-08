import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Root() {
  return (
    <Box>
      <Headers />
      <Outlet />
      <ReactQueryDevtools />
    </Box>
  );
}
