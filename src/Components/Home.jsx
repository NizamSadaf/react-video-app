import { Box, Container, Heading, Stack,Image,Text } from '@chakra-ui/react'
import React from 'react'
import MyCarousel from './MyCarousel'
import img5 from '../assets/5.png'
const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container minH={'100vh'} maxW={'full'} p={"15"}>
        <Heading textTransform={'uppercase'} borderBottom={'1px'} w={'fit-content'} m={'auto'}>
          Services
        </Heading>
        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
          <Box w={['full','40%']}>
           <Image h={['40','400']} w={'full'} src={img5} filter={'hue-rotate(-130deg)'}/>
          </Box>
         <Box w={['full','60%']}>
          <Text letterSpacing={'widest'} lineHeight={'190%'} textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo commodi aliquid, nostrum quo saepe exercitationem vero minima omnis enim odio quod cupiditate nulla eligendi velit, nemo, impedit odit sapiente voluptatem. Maiores, commodi natus cupiditate ut vitae exercitationem laborum fuga ipsa doloremque itaque reprehenderit, enim rerum modi sunt blanditiis officiis, necessitatibus quod repudiandae odio eum impedit aut magni. Sint dolorum quo unde vitae doloremque obcaecati. Dolor illum in nulla cumque sapiente, exercitationem veniam, nihil provident consectetur deleniti, modi consequuntur velit quaerat ex quidem atque? Architecto aliquid repudiandae deleniti veniam nostrum? Officia dolor consequatur non optio rem sunt cum corrupti laboriosam!
            </Text>
         </Box>
          
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
