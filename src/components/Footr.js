import { Box, Button, HStack, Heading, Input, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footr = () => {
  return ( <Box bg={"blackAlpha.900"} minH={"40"} p="16 " color={"white"}>
    <Stack direction={["column","row"]}>

        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
            <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>
                Subscribe to get Update
            </Heading>
            <HStack borderBottom={"2px solid white"} py={"2"}>
                <Input placeholder="Enter your email..." border={"nones"} borderRadius={"none"} outline={"none"}  focusBorderColor="none"/>
                <Button p={"0"}
                colorScheme={"purple"}
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}>
                    
                    <AiOutlineSend  size={"20"}/>

                </Button>
            </HStack>
        </VStack>
        <VStack w={"full"} borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]}>
            <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>
                VIDEO HUB
            </Heading>
            <Text> All rights received</Text>
        </VStack>
       
        <VStack w={"full"} >
            <Heading  size={"md"} textTransform={"uppercase"} textAlign={"center"}>
                Social Media
            </Heading>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
<a target={"_blank"} href="http://youtube.com">Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
<a target={"_blank"} href="https://github.com/Ram3152">Github</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
<a target={"_blank"} href="https://www.linkedin.com/in/ram-kumar-54b050256">Linkdin</a>
            </Button>
        </VStack>
    </Stack>

  </Box>
  );
};

export default Footr
