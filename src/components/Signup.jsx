import React from 'react'

import { Button, Container, Heading, Input, VStack, color,Text, Avatar } from '@chakra-ui/react'

import { Link } from 'react-router-dom'

const Signup = () => {
  return<Container maxW={"container.xl"} h={'100vh'} p={'16'}>
    <form >
        <VStack alignItems={"stretch"} spacing ={'8'} w={['full','96']} m={'auto'}my={'16'}>
            <Heading alignSelf={'center'}>
                VIDEO HUB
            </Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <Input placeholder={'Enter your name'} type={'text'} required  focusBorderColor={'purple.500'}/>
        <Input placeholder={' Enter your email'} type={'email'} required  focusBorderColor={'purple.500'}/>
        <Input placeholder={'Password'} type={'password'} required  focusBorderColor={'purple.500'}/>
      
        <Button colorScheme={'purple'} type={'submit'}>Sign Up</Button>
        <Text alignSelf={'center'}>All Ready SignUp?{"   "}
        <Button variant={'link'}  colorScheme={"purple.500"}>
          <Link to={'/login'  }>login</Link>

        </Button>
        </Text>
        </VStack>
    </form>
  </Container>
}



export default Signup
