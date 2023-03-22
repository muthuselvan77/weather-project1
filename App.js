import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Weatherreport from './Weatherreport';

function App(){
  return( 
    <> 
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/Counter">Counter</Link>
            </li>
            <li>
              <Link to="/todolist">todolist</Link>
            </li>
            <li>
              <Link to="/imagesearch">imagesearch</Link>
            </li>
            <li>
              <Link to="/weather">weather</Link>
            </li>
            <li>
              <Link to="/Weatherapi">weatherapi</Link>
            
            </li> */}
             <div className='report'>
              <Link to="/Weatherreport" style={{color:"black",position:"relative",left:"78px" }}>Weather Report</Link>
            </div> 
            
            
            
            
          
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Routes>
          {/* <Route path="/Counter" element={<Counter/>}>
            
          </Route>
          <Route path="/todolist" element={<Todolist/>}>
          </Route>
          <Route path="/imagesearch" element={<Imagesearch/>}>
          </Route>
          <Route path="/weather" element={<Weather/>}>

          </Route>
          <Route path="/Weatherapi"element={<Weatherapi/>}></Route>  */}
           <Route path="/Weatherreport" element={<Weatherreport/>}>

          </Route> 

          
          
          
        </Routes>
      </div>
    </Router>
      


    

    </>
  )
}



export default App;
