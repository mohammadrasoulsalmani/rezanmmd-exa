import './App.css';
import Product from './Product';
import Header from './Header';
import Detail from './Detail';
import BuyContext from './BuyContext';
import ConsulSection from './ConsulSection';
import FormComment from './FormComment';
import Offers from './Offers';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <BuyContext>
          <Header />
          <Product />
          <Detail />
          <ConsulSection />
          <FormComment />
          <Offers />
          <Footer />
      </BuyContext>
    </div>
  );
}

export default App;
