import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Headers from "./Headers";

export default function Root() {
  return (
    <Box>
      <Headers />
      <Outlet />
    </Box>
  );
}
