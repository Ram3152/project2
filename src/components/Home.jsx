import { Box, Container, Heading, Stack,Text} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import React from 'react'
import {Carousel } from"react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from"../assets/img1.jpg";
import img2 from"../assets/img2.jpg";
import img3 from"../assets/img3.jpg";
import img4 from"../assets/img4.jpg";
import img5 from"../assets/img5.jpg";
const headingOption = {
    pos:"absolute",
    left:"50%",
    top:"50%" ,
    transform: "translate(-50%,-50%)",
    texttransform:"uppercase",
    p:"4",
    size:"4xl"

};
const Home = () => {
  return <Box>
    
<MyCarousel />
<Container  maxW={"container.x1"} minH={"100vh"} p="16">
    <Heading textTransform={"uppercase"}
    py="2"
    w={"fit-content"}
    borderBottom={"2px solid"}
    m="auto">
        Services
        
    </Heading>
<Stack
h="full"
p={"4"}
alignItems={"center"}
direction={["column","row"]}>
    <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"} />
    <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    The future of gaming holds incredible potential, blurring the boundaries between reality and virtual experiences. As technology advances, gaming will continue to push the boundaries of creativity, storytelling, and interactivity, transforming entertainment and shaping the way we interact with digital content. Get ready for a future where gaming becomes an integral part of our daily lives, offering immersive, engaging, and truly unforgettable experiences.
    </Text>
   
      
</Stack>
</Container>

    </Box>
  
};
const MyCarousel = () => {
    return <Carousel autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}>
<Box w="full" h={"100vh"}>
<Image src={img1} />
<Heading bg={"blackAlpha.600"} color={"white"} {...headingOption}>Watch THe Future</Heading>
</Box>
<Box w="full" h={"100vh"}>
<Image src={img2} />
<Heading bg={"blackAlpha.600"} color={"white"} {...headingOption}> Future is gaming</Heading>
</Box>
<Box w="full" h={"100vh"}>
<Image src={img3} />
<Heading bg={"whiteAlpha.600"} color={"black"} {...headingOption}> Gaming on console</Heading>
</Box>
<Box w="full" h={"100vh"}>
<Image src={img4} />
<Heading bg={"whiteAlpha.600"} color={"black"} {...headingOption}> Night Life is cool</Heading>
</Box>
    </Carousel>
}

export default Home
