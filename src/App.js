import './App.css';
import Navbar from './Components/Navbar';
import PreNavbar from './Components/PreNavbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Slider from './Components/Slider';
import data from './Data/data.json'
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import StartProduct from './Components/StartProduct';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories';
import ProductReviews from './Components/ProductReviews';
import Video from './Components/Video';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import NavOption from './Components/NacOption';


function App() {
  return (
    <Router >
      <PreNavbar />
      <Navbar />
      <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider />
      <Offers offer={data.offer}/>
      <Heading text={"STAR PRODUCTS"}/>
      <StartProduct starProduct={data.starProduct}/>
      <Heading text={"HOT ACCESSORIES"}/>
      <HotAccessoriesMenu/>
      <Routes>
      <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}></Route>
      <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}></Route>
      <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homemusicCover={data.hotAccessoriesCover.home}/>}></Route>
      <Route exact path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>}></Route>
      <Route exact path='/mobileaccessories' element={<HotAccessories mobileaccessories={data.hotAccessories.mobileAccessories} mobileaccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}></Route>
      </Routes>
      <Heading text={"PRODUCTS REVIEWS"}/>
      <ProductReviews ProductReviews={data.productReviews}/>
      <Heading text={"VIDEOS"}/>
      <Video video={data.videos}/> 
      <Heading text={"IN THE PRESS"}/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>

    </Router>
  );
}

export default App;
