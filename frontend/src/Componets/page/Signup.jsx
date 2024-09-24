import React from 'react'
import {
    Box,
    Flex,
    Input,
    Stack,
    Button,
    Heading,
    FormControl,
    FormLabel,
    useColorModeValue,
    VStack

 } from '@chakra-ui/react'
function Signup() {
   return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack
          spacing={8}
          maxW={'lg'}
          w={'full'}
          border="1px solid black"
          paddingY={12}
          px={6}
          boxShadow={'lg'}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up</Heading>
          </Stack>

          <Box rounded={"lg"} p={8}>
            <VStack spacing={4}>
              <FormControl id='name' isRequired>
                <FormLabel>Name:</FormLabel>
                <Input 
                  type='text'
                  placeholder='Enter your name'
                />
              </FormControl>

              <FormControl id='email' isRequired>
                <FormLabel>Email:</FormLabel>
                <Input 
                  type='email'
                  placeholder='Enter your email'
                />
              </FormControl>

              <FormControl id='password' isRequired>
                <FormLabel>Password:</FormLabel>
                <Input 
                  type='password'
                  placeholder='Enter your password'
                />
              </FormControl>

              <Button
                colorScheme={"blue"}
                width={"full"}
                mt={4}
              >
                Sign up
              </Button>
            </VStack>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}

export default Signup
