import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  useColorMode,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import LoginModal from "./LoginModal";
import { FaAirbnb, FaMoon, FaSun } from "react-icons/fa";
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
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue("red.500", "red.200");
  const Icon = useColorModeValue(FaMoon, FaSun);
  return (
    <HStack
      justifyContent={"space-between"}
      py={"5"}
      px={"20"}
      borderBottomWidth={1}
    >
      <Box color={logoColor}>
        <FaAirbnb size={"48"} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          onClick={toggleColorMode}
          variant={"ghost"}
          aria-label="Dark Mode"
          icon={<Icon />}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode>
          <Button onClick={onSignUpOpen} colorScheme={"red"}>
            Sign Up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
