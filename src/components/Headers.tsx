import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import SignUpModal from "./SignUpModal";
export default function Headers() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure();
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure();
  return (
    <HStack
      justifyContent={"space-between"}
      py={"5"}
      px={"10"}
      borderBottomWidth={1}
    >
      <Box color="red.500">
        <FaAirbnb size={"48"} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          variant={"ghost"}
          aria-label="Dark Mode"
          icon={<FaMoon />}
        />
        <Button onClick={onLoginOpen}>Log in</Button>

        <Button onClick={onSignUpOpen} colorScheme={"red"}>
          Sign Up
        </Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
