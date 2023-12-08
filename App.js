import Main from './components/Main';

import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Verification from './components/Verification/Verification';
import Sign from './components/Sign/Sign';
import Certificate from './components/Certificate/Certificate';
import Generate from './components/generate/Generate';
import Contact from './components/Contact/Contact';
function App() {
  return (
   <>
   <Router> 
   
        <Routes>
          <Route path ="/" element ={<Main/>}/>
          <Route path ="/verification" element ={<Verification/>}/>
          <Route path ="/sign" element ={<Sign/>}/>
          <Route path='/certificate' element={<Certificate/>}/>
          <Route path='/generate' element={<Generate/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
      </Router>
   </>
  );
}

export default App;
