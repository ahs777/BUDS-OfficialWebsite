
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import ProtectedRoutes from './Pages/ProtectRoutes/ProtectedRoutes'
function App() {
  
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/auth" element={<LandingPage/>}/>
    <Route element={<ProtectedRoutes/>} > 
    {/* <Route path="/mart/wishlist" element={<MartWishList  />}/> */}
      </Route>    
   </Routes>
   </BrowserRouter>
    </>
  )
}
export default App
