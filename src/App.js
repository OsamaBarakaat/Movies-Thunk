import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Error from './components/notFound/notFound';
import AddMovie from './Movies/addMovie/addMovie';
import DeleteMovie from './Movies/deleteMovie/deleteMovie';
import Favorites from './Movies/Favorites/Favorites';
import Movies from './Movies/Movies/Movies';
import MDetails from './Movies/MoviesDetails/MDetails';
import UpdateMovie from './Movies/updateMovie/updateMovie';
import ContactUs from './Pages/contactUs/contactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Registration/Register';
import TestPages from './Pages/test/test';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/Movies' element={<Movies />}>
          <Route index element={<AddMovie />}></Route>
          <Route path='addMovie' element={<AddMovie />} />
          <Route path='updateMovie' element={<UpdateMovie />} />
          <Route path='deleteMovie' element={<DeleteMovie />} />
        </Route>
        <Route path='/MDetails' element={<MDetails />} />
        <Route path='/Test' element={<TestPages />} />
        <Route path='/MDetails/:id' element={<MDetails />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
