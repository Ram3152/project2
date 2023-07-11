import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerCloseButton,DrawerContent,DrawerOverlay,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react";
import{Link } from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi";
const Header = () => {

    const {isOpen,onClose,onOpen} =useDisclosure()
  return<>
  <Button colorScheme={"purple"}
  zIndex={"overlay"}
  p={"0"}
  w={"10"}
  h={"10"}
  borderRadius={"full"}
  pos={"fixed"}
  top={"4"}
  left={"4"}
  onClick={onOpen}>

    <BiMenuAltLeft  size={"20"}/>
   
  </Button>
  
  <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
<DrawerOverlay />
<DrawerContent>
    <DrawerCloseButton/>
<DrawerHeader>
    VIDEO HUB
</DrawerHeader>
<DrawerBody>
    <VStack alignItems={"flex-start"}>
        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/"}>Home</Link>

        </Button>
        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/video"}>Video</Link>

        </Button>
        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/videos?category=free"}>Free Video</Link>

        </Button>
        <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
            <Link to={"/upload"}>Upload Video</Link>

        </Button>
    </VStack>

    <HStack pos={"absolute"} bottom={"10"} left={"0"} 
    w={"full"} justifyContent={"space-evenly"}>
        <Button colorScheme={"purple"}>
            <Link to={"/login"}>Log In</Link>
        </Button>
        <Button onClick={onClose} colorScheme={"purple"} variant={"outline"}>
            <Link to={"/signup"}>Sign In</Link>
        </Button>
    </HStack>
</DrawerBody>
</DrawerContent>
  </Drawer>
  </>
}

export default Header
