import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from './containers/productListing';
import ProductDetail from './containers/productDetail';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          {/* <Route>404 Not Found!</Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
