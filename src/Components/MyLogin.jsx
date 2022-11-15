import { Box, Button, color, Heading, HStack, Input,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MyLogin = () => {
  return (
    <Box w={'full'} h={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Box bg={'purple.500'} h={['80vh','80vh']} w={['full','30%']} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'5'} p={'10'} borderRadius={'lg'}>
          <Heading textTransform={'uppercase'} color={'white'}>Login</Heading>
          <Input placeholder='Email...' color={'black'} w={'full'} focusBorderColor={'none'} bg={'white'}/>
          <Input placeholder='Password...' w={'full'} color={'black'} focusBorderColor={'none'} bg={'white'}/>
          <Button variant={'outline'} color={'white'} _hover={{color:"black", bg:'white'}}>
            LOGIN
          </Button>
            <Button variant={'link'} color={'white'} alignSelf={'flex-end'}>
             Forget Password?
            </Button>
            <HStack alignSelf={'flex-end'}>
              <Text color={'black'}>
                New user?
              </Text>
                <Link  to={'/signup'}>
                  <Button variant={'link'} color={'white'} >
                    Sign up
                  </Button>
              </Link>
            </HStack>
            
      </Box>
     
    </Box>
  )
}

export default MyLogin
