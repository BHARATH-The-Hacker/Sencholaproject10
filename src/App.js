import {
   BrowserRouter, Routes, Route,
 } from 'react-router-dom';
import Header from "./component/Header";
import Footer from './component/footer';
import HomePage from './component/HomePage';
import Gallery from './component/Gallery';


function App() {
    
  return (
    <div>
      <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
      <Route path="/Gallery" element={<Gallery />}>
      </Route>
    </Routes>
  </BrowserRouter>
  <Footer /> 
  </div>
  );
}

export default App;
