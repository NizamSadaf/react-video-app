import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'

const UploadVideos = () => {
  return (
    <>
        <Box w={'full'} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box w={['full','30%']} h={'50vh'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Box>
                    <Input type={'file'} border={'none'} />
                </Box>
                <Box mt={'2'}>
                    <Button type={'submit'} variant={'outline'} colorScheme={'purple'}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default UploadVideos
