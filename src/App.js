import './App.css';
import Navbar from './Navbar'
import Home from "./Home"
import { BrowserRouter as Router,Route,Switch, BrowserRouter} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>
          {/* <p>hello</p> */}
            <Navbar/>
            <div className='contant'>
              <Switch>
                <Route exact path = "/">
                  <Home/>
                </Route>
                <Route path = "/create">
                  <Create/>
                </Route>
                <Route path = "/blogs/:id">
                  <BlogDetails/>
                </Route>
              </Switch>
            </div>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
