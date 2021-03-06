import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import './Components/bootstrap.min.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import TreatmentDetails from './Components/TreatmentDetails/TreatmentDetails';
import PageNotFound from './Components/PageNotFound';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';





function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId'element={<TreatmentDetails></TreatmentDetails>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/treatmentdetails' element={<TreatmentDetails></TreatmentDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
