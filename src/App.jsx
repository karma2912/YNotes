import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Notestate from './context/notes/Notestate';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
    <>
    <Notestate>
    <Routes>
      <Route path='/' element={<><Navbar/><hr/><Home/><Notes/><Footer/></>}/>
      <Route path='/about'  element={<><Navbar/><hr/><About/><Footer/></>}/>
      <Route path='/contact'  element={<><Navbar/><hr/><Contact/><Footer/></>}/>
      <Route path='/login'  element={<><Navbar/><hr/><Login/><Footer/></>}/>
      <Route path='/signup'  element={<><Navbar/><hr/><SignUp/><Footer/></>}/>
    </Routes>
    </Notestate>
    </>
  )
}

export default App
