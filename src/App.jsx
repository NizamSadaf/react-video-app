import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {useColorMode,Button} from '@chakra-ui/react'
import {MoonIcon} from '@chakra-ui/icons'
import Navbar from './Components/NavbarMenu'
import Home from './Components/Home'
import MyVideos from './Components/MyVideos'
import SignUp from './Components/SignUp'
import MyLogin from './Components/MyLogin'
import Footer from './Components/Footer'
import UploadVideos from './Components/UploadVideos'
const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
   <Router>
    <Button pos='absolute' top={4} right={4} onClick={toggleColorMode} zIndex={'overlay'} colorScheme='purple' borderRadius={'50%'}>
      <MoonIcon/>
    </Button>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<MyVideos/>}/>
      <Route path='/upload_video' element={<UploadVideos/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<MyLogin/>}/>
    </Routes>
    <Footer/>
   </Router>
        
  )
}

export default App
