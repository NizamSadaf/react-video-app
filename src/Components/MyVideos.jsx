import { Box, Container,Text,AspectRatio, Heading, VStack,Stack, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const MyVideos = () => {
  const obj=[
  {
    id:1,
    title:'Lecture 1',
    src:'https://www.youtube.com/embed/YRyLAR6A1Wc',
    description:'This Video is Nice'
  },
  {
    id:2,
    title:'Lecture 2',
    src:'https://www.youtube.com/embed/QjisC1Aj-rA',
    description:'This Video is Interesting'
  },
  {
    id:3,
    title:'Lecture 3',
    src:'https://www.youtube.com/embed/upFoXg7myu8',
    description:'This Video is Important'
  },

]
   const [currentVideo,setcurrentVideo]=useState(obj[0])
  return (
    <>
      <Heading textAlign={'center'} p={'4'}>VIDEOS</Heading>
      <Stack direction={['column','row']}>
        <AspectRatio w={['full','170%']} m={['0','4']}>
        {/* iframe vidoes */}
        <iframe  src={currentVideo.src}></iframe>
        </AspectRatio>
        <Stack w={'full'} justifyContent={['center','flex-start']} direction={['row','column']}>
          {obj.map((item,index)=>
            (
            <Button w={'fit-content'} alignSelf={'center'} marginTop={['0','8']} p={['5','4']} colorScheme={'purple'} variant={'outline'} onClick={()=>setcurrentVideo(item)} textTransform={'uppercase'}>
            Lecture {item.id}
           </Button>
           ))}
        </Stack>
      </Stack>
      <VStack w={'full'} alignItems={'flex-start'} p={'4'}>
        <Heading>{currentVideo.title}</Heading>
        <Text textAlign={'justify'} lineHeight={'30px'} letterSpacing={'1px'}>
          <p>{currentVideo.description}</p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, a consequuntur nobis asperiores culpa quae illo quam perspiciatis harum tempore placeat ex itaque, aspernatur repudiandae temporibus laudantium dolore. Dicta nobis illo deleniti culpa vero doloremque velit quibusdam nesciunt, omnis ut quasi maxime, quod corporis saepe dolor voluptatibus! Ea nulla provident recusandae repudiandae molestiae laborum officia rem incidunt. Iste, tempore! Totam rerum earum suscipit cum voluptatibus, vero, cumque amet laborum molestiae consequatur magni asperiores, nihil nesciunt harum culpa quisquam. Minus aspernatur ex error dicta ad magni ipsam, similique obcaecati eius autem id officia facere non! Enim nobis quia obcaecati veritatis repudiandae! Assumenda vel voluptatum asperiores similique. Aspernatur, inventore saepe. Aliquid voluptatem mollitia obcaecati, laudantium dignissimos qui ratione blanditiis architecto ipsam nesciunt possimus? Atque sapiente optio similique ex alias libero, architecto eligendi excepturi pariatur vero, vitae veniam provident, dignissimos est corrupti! Magni necessitatibus consequatur recusandae, veritatis repellendus, cupiditate, sit nostrum omnis explicabo aliquam dignissimos odio dolore beatae cumque nulla distinctio debitis dolor ducimus magnam nam reprehenderit inventore? Tenetur corrupti minima dolorem voluptatem ut culpa numquam, voluptates nulla rerum dolor recusandae at. Quisquam assumenda impedit aspernatur eligendi nisi alias ratione omnis, voluptatibus hic quo, laboriosam placeat facere porro sapiente, magnam aliquam consequuntur quae!
        </Text>
      </VStack>
    </>
  )
}

export default MyVideos
