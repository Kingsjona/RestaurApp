//importing necessary css and components files
//import logo from './logo.svg';
import './App.css';
import HomePage from './HOME-PAGE/HomePage';
import {Routes, Route, Link} from 'react-router-dom';
import AboutUs from './About-Page/AboutUs';
import BookATable from './Reservation/Book-A-Table';




function App() {
  const myLogo = "./images/Toplogo.png";
  return (
    
    <div className="App">
      {/* The logo at the top of the app*/}
      <div className='Top'>
        <img src={myLogo} width={200} height={200} alt="Top banner" className='logo'/>
      </div>

        {/*Navigation links*/}
        <nav>
          <Link to="/" className='nav-item'>Home</Link>
          <Link to="/aboutus" className='nav-item'>About</Link>
          <Link to="/reservations" className='nav-item'>Reservations</Link>
        </nav>

        {/* Route definitions for different pages*/}
        <Routes>
          <Route path ='/' element={<HomePage />} />
          <Route path ='/aboutus' element={<AboutUs /> } />
          <Route path='/reservations' element={<BookATable />} />
        </Routes>
    </div>
  );
}

export default App;
