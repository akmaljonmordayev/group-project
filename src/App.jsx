import './App.css'
import Header from "./componenets/header/Header"
import Locations from "./componenets/locations/Locations"
import Articles from "./componenets/articles/Articles"
import Restaurants from "./componenets/restaurants/Restaurants"
import About from "./componenets/about/About"
import Footer from "./componenets/footer/Footer"
import Trip from "./componenets/trip/Trip"
import Destinations from "./componenets/destinations/Destination"
function App() {

  return (
    <>
      <Header/>
      <Locations/>
      <Restaurants/>
      <About/>
      <Trip/>
      <Destinations/>
      <Articles/>
      <Footer/>
    </>
  ) 
}
export default App
