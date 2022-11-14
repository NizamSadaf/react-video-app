import React from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import { Button, Drawer, DrawerContent,DrawerCloseButton, DrawerOverlay, useDisclosure, DrawerHeader, DrawerBody, VStack, HStack } from '@chakra-ui/react'
import { Link,NavLink } from 'react-router-dom'
const NavbarMenu = () => {
  const {isOpen,onOpen,onClose}=useDisclosure()
  return (
    <>
      <Button pos={'absolute'} top={'4'} left={'4'} w={'15'} onClick={onOpen} colorScheme='purple' borderRadius={'50%'} zIndex={'overlay'}>
        <BiMenuAltRight size={'20'}/>
      </Button>
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay/>
          <DrawerContent>
            <DrawerHeader>VIDEO TUBE</DrawerHeader>
            <DrawerCloseButton/>
              <DrawerBody>
                  <VStack alignItems={'flex-start'}>
                  <Link to={'/'}>
                    <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}  _hover={{ bg: "purple.400",color:"white" }}>
                      Home
                    </Button>
                    </Link>
                    <Link to={'/videos'}>
                    <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}  _hover={{ bg: "purple.400",color:"white" }}>
                      Videos
                    </Button>
                    </Link>
                    <Link to={'/videos?category=free'}>
                    <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}  _hover={{ bg: "purple.400",color:"white" }}>
                      Free Videos
                    </Button>
                    </Link>
                    <Link to={'/upload_video'}>
                    <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}  _hover={{ bg: "purple.400",color:"white" }}>
                      Upload Video
                    </Button>
                    </Link>
                  </VStack>
                  <HStack pos={'absolute'} bottom={'10'} left={'0'} justifyContent={'space-evenly'} w={'full'}>
                  <Link to={'/signup'}>
                  <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}  _hover={{ bg: "purple.400",color:"white" }}>
                      Sign Up
                    </Button>
                    </Link>
                    <Link to={'/login'}>
                  <Button onClick={onClose} variant={'solid'} colorScheme={'purple'}  _hover={{ bg: "purple.400",color:"white" }}>
                      Login
                    </Button>
                    </Link>
                  </HStack>
              </DrawerBody>
          </DrawerContent>
      </Drawer>
    </>
  )
}

export default NavbarMenu
