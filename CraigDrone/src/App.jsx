
import './App.css';
import Navbar from './components/Navbar.jsx';
import 
{
BrowserRouter as Router,
Route,
Routes
}from 'react-router-dom';

import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Services from './pages/Services.jsx';


const App = () => {
    return (
      <Router>
        <Navbar />
          <div>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/Contact' element={<Contact/>} />
               <Route path='/Portfolio' element={<Portfolio/>} />
               <Route path='/Services' element={<Services/>} />
            </Routes>
         </div>

         <footer>
                <h3>
                    Drone Company
                </h3>
                <h4>
                    Contact us now!
                </h4>
                <h4>
                    Email here
                </h4>
                <h4>
                    Phone number here
                </h4>
                <h4>
                    maybe: social media
                </h4>
            </footer>

       </Router>
    );
}

export default App
