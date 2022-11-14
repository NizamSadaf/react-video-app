import React from 'react'
import { Box, Button, color, Heading, HStack, Input,Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <form action="" method="post">
        <Box w={'full'} h={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Box bg={'purple.500'} h={'80vh'} w={'30%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'5'} p={'10'} borderRadius={'lg'}>
          <Heading textTransform={'uppercase'} color={'white'}>Login</Heading>
          <Input placeholder='Username...' w={'full'} color={'black'} focusBorderColor={'none'} bg={['white']} required/>
          <Input type={'email'} placeholder='Email...' w={'full'} color={'black'} focusBorderColor={'none'} bg={'white'} required/>
          <Input type={'password'} placeholder='Password...' w={'full'} color={'black'} focusBorderColor={'none'} bg={'white'} required/>
          <Input type={'password'} placeholder='Retype Password...' w={'full'} color={'black'} focusBorderColor={'none'} bg={'white'} required/>
          <Button variant={'outline'} color={'white'} _hover={{color:"black", bg:'white'}}>
            SIGN UP
          </Button>
            <HStack alignSelf={'flex-end'}>
              <Text color={'black'}>
                Existing user?
              </Text>
                <Link  to={'/login'}>
                  <Button type={'submit'} variant={'link'} color={'white'} >
                    Login
                  </Button>
              </Link>
            </HStack>
            
      </Box>
     
    </Box>
    </form>
    
  )
}

export default SignUp
