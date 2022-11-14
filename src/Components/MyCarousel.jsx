import { Box,Heading,Image } from '@chakra-ui/react';
import { transform } from 'framer-motion';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
const MyCarousel = () => {
  const headingOption={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    textTransform:'uppercase'
  }
  return (
    <Carousel interval={1000} autoFocus={false} autoPlay={true} showArrows={false} showIndicators showThumbs={false} stopOnHover={false}>
      <Box  w={'full'} h={'100vh'}>
      <Heading bg={'whiteAlpha.400'} w={'fit-content'} m={'auto'} {...headingOption} color={'black'}>Welcome to Gaming World</Heading>
        <Image src={img1}/>
      </Box>
      <Box w={'full'} h={'100vh'}>
      <Heading bg={'whiteAlpha.800'} {...headingOption} color={'black'}>Welcome to Gaming World</Heading>
        <Image src={img2}/>
      </Box> 
      <Box w={'full'} h={'100vh'}>
      <Heading bg={'blackAlpha.900'} {...headingOption} color={'white'}>Welcome to Gaming World</Heading>
        <Image src={img3}/>
      </Box>
      <Box w={'full'} h={'100vh'}>
      <Heading bg={'blackAlpha.900'} {...headingOption} color={'white'}>Welcome to Gaming World</Heading>
        <Image src={img4}/>
      </Box>
    </Carousel>
  )
}

export default MyCarousel
