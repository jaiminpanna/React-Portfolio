import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/home';
import Skills from './components/skills';
import Contect from './components/contect';
import Projectcontainer from './components/projectcontainer';
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projectcontainer/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes>
 
     </BrowserRouter>
          <Footer/>
    
    </div>
  );
}

export default App;