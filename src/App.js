import logo from './logo.svg';
import Navbar from './components/navbar';
import Carousel from './components/carousel1';
import Experiences from './components/experience';
import NewsCard from './components/card1';
import SustainabilityNews from './components/card2';
import BookRecord from './components/bookrecord';
import BrandGrid from './components/brand';
import ProductDescription from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Experiences />
      <SustainabilityNews />
      <BookRecord />
      <BrandGrid />
      <ProductDescription />
      <Footer />
     
    </div>
  );
}

export default App;
