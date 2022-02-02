import { BrowserRouter } from 'react-router-dom';
import {  Route, Switch } from 'react-router';
import './App.css';
import About from './Components/About/About';
import Contactus from './Components/Contact/Contactus';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Request from './Components/RequestApointment/Request';
import Testmonial from './Components/Testomonials/Testmonial';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      < BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivateRoute path="/testomonial">
        <Testmonial></Testmonial>
      </PrivateRoute>
      <Route exact path="/services">
        <Services></Services>
      </Route>
      <Route path="/signup">
        <Signup></Signup>
      </Route>
      <Route path="/about us">
        <About></About>
      </Route>
      <PrivateRoute path="/request">
        <Request></Request>
      </PrivateRoute>
      <Route path="/contact us">
        <Contactus></Contactus>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
      </Switch>
      
       <Footer></Footer>
      
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
