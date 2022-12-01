
import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Web3 from "web3";
import Login from '../Components/Login.js'
import detectEthereumProvider from '@metamask/detect-provider'



export default function Home() {
 // const { isAuthenticated, authenticate, user, logout, isLoggingOut} = useMoralis();
  //console.log(isAuthenticated)
  let web3;
  const authenticate = () => {
    (window as any).ethereum.request({ method: "eth_requestAccounts" });
            web3 = new Web3((window as any).ethereum);
  }
  if (typeof window !== "undefined" &&
  typeof (window as any).ethereum !== "undefined") {
    return (
      <>
        <Head>
          <title>Login|PeerCharge</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, teal,400,purple,300)"
        >
          <Text fontSize="5xl" fontWeight="bold" color="white">
          PeerCharge is a blockchain-based Voluntary carbon credits and
            carbon-backed NFTs platform for EV charging projects across Africa
          </Text>
          <Button colorScheme="purple" size="lg" mt="6" onClick = {authenticate}>
            Login
          </Button>
        </Flex>
      </>
    );
  }
  else{
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Flex direction= "column" width = "100vw" height= "100vh">
        <Login />
      </Flex>
    </>
  );
}
}