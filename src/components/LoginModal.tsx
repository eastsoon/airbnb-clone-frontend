import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaUser, FaLock } from "react-icons/fa";
import { usernameLogIn } from "../api";
import SocialLogin from "./SocialLogin";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IForm {
  username: string;
  password: string;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { register, handleSubmit } = useForm<IForm>();
  const toast = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation(usernameLogIn, {
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: (data) => {
      console.log("mutation is success");
      toast({
        title: "welcome back!",
        status: "success",
      });
      onClose();
      queryClient.refetchQueries(["me"]);
    },
    onError: (error) => {
      console.log(error);
      console.log("mutation has an error");
    },
  });
  const onSubmit = ({ username, password }: IForm) => {
    mutation.mutate({ username, password });
    // console.log(data);
  };
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form" onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color="gray.500">
                    <FaUser />
                  </Box>
                }
              />
              <Input
                required
                {...register("username", { required: true })}
                variant={"filled"}
                placeholder="UserName"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color="gray.500">
                    <FaLock />
                  </Box>
                }
              />
              <Input
                required
                {...register("password", { required: true })}
                type="password"
                variant={"filled"}
                placeholder="Password"
              />
            </InputGroup>
          </VStack>
          <Button
            isLoading={mutation.isLoading}
            type="submit"
            mt={4}
            colorScheme={"red"}
            w="100%"
          >
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
