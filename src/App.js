//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from './components/pages/Homepage.js';
import AddPage from './components/pages/AddPage.js';
import Nav from './components/pages/Nav';
import Footer from './components/pages/Footer.js';
import ListPage from './components/pages/ListPage.js';
import UpdatePage from './components/pages/UpdatePage.js';
import DeletePage from './components/pages/DeletePage.js';
//import Login from './components/pages/User.js'
import LoginPage from './components/pages/LoginPage.js';



function App() {

  
  return (
    <>
    
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/add" component={AddPage}/>
        <Route path="/view" component={ListPage}/>
        <Route path="/update" component={UpdatePage}/>
        <Route path="/delete" component={DeletePage}/>
        <Route path="/loginpage" component={LoginPage}/>
        <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/>  
        
      </Switch>
    </Router>
    <Footer />
    
    </>
  );
}

export default App;

//<Route path="/add" component={AddPage}/>