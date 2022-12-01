
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { 
    connectWallet,
    getCurrentWalletConnected,
    registerCreditHolder,
    registerVerifiers,
    mintNFT,
} from "../pages/util/interact"

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="FullName"
          type="username"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="email@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="ChargingStation Location"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="NationalId"
          type="National Id"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="teal" mb={8}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
