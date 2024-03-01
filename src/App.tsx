import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './Components/Header'
/* '

import RideDetail from './pages/RideDetail'
 */
import OfferSeat from './pages/OfferSeat'
import Profile from './pages/Profile'
import Footer from './Components/Footer'
import Error from './pages/Error'
import SearchPage from './pages/SearchPage'
function App() {

  return (
    <>
    <Header />
    <Routes>
     
      <Route path="/" element={<Home />} />
        {/*

      
      
       <Route path="/ride/:rideId" element={<RideDetail />} />
      
         */}
         <Route path="/offer-seat" element={<OfferSeat />} />
         <Route path="/*" element={<Error />} />
         <Route path="/search" element={<SearchPage />} />
         <Route path="/profile" element={<Profile />} />
      </Routes>
   
    <Footer />  
    </>
  )
}

export default App
