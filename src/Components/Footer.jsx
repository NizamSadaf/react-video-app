import { Stack,VStack,HStack,Text,Heading,Input,Button } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Stack direction={['column','row']} minH={'10rem'} bg={'blackAlpha.900'} color={'white'}>
            <VStack w={'full'} p={'4'}>
                <Heading color={'white'} textTransform={'uppercase'}>
                    Subscribe
                </Heading>
                <Input placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none" type={'text'} bg={'white'} color={'blackAlpha.900'}/>
              <Button variant={'outline'} colorScheme={'white'}>
                 SUBSCRIBE
              </Button>
            </VStack>
            <VStack p={'4'} w={'full'} bg={''} borderLeft={'1px solid white'} borderRight={'1px solid white'}>
                <Heading color={'white'} textTransform={'uppercase'}>
                    Video Tube
                </Heading>
                <Text textTransform={'uppercase'}>ALL RIGHTS RESERVED</Text>
            </VStack>
            <VStack p={'4'} w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a  href="#">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a  href="#">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a  href="#">
              Github
            </a>
          </Button>
        </VStack>
        </Stack>
    </>
  )
}

export default Footer
