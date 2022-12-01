
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
import React from "react"
import { useEffect, useState } from 'react';
import { 
    connectWallet,
    getCurrentWalletConnected,
    registerCreditHolder,
    registerVerifiers,
    RegistryContract,
} from "../pages/util/interact.js"


const Login = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
   // const[registerCreditHolder, setRegisterCreditHolder] = useState();

    useEffect(async() => {},[]);
    // function addSmartContractListner() {
      
    // };
    function addWallectListener() {

    };
    const connectWalletPressed = async () => {

    };
    const RegisterCreditHolder = async () => {
        
    };

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Button colorScheme="purple" size="lg" mt="6" onClick = {connectWalletPressed}>
      {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
            
          </Button>
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
        <Button id = "Register" onClick={RegisterCreditHolder} colorScheme="teal" mb={8}>
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
