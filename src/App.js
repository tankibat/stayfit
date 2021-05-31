
import './App.css';

import Appx from './Appx';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  'react-bootstrap';
import FooterPage from './pages/footer.js';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <div className="App">
     <header> 
     <Appx />
    
      
      <FooterPage/>
     
      <div > 
      <ScrollButton />



      </div>
      
     
       
      </header>
      
     </div>
     
  
  );
}

export default App;
