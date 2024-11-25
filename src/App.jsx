
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import HomePage from "./Pages/HomePage"
import EventsPage from './Pages/EventsPage'
import GalleryPage from './Pages/GalleryPage'
import NewsPage from './Pages/NewsPage'
import ProtectedRoutes from './Pages/ProtectRoutes/ProtectedRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bu/gallery" element={<GalleryPage />} />
          <Route path="/bu/news" element={<NewsPage />} />
          <Route path="/bu/events" element={<EventsPage />} />
          <Route path="/auth" element={<LandingPage />} />
          <Route element={<ProtectedRoutes />} >
            {/* <Route path="/mart/wishlist" element={<MartWishList  />}/> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
