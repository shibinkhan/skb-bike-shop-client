import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllBikes from './Pages/Explore/AllBikes';
import BikeDetails from './Pages/Explore/BikeDetails';
import Login from './Pages/SignUpInOut/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/SignUpInOut/PrivateRoute/PrivateRoute';
import AddAProduct from './Pages/Dashboard/AdminsDb/AddAProduct/AddAProduct';
import ManageAllOrders from './Pages/Dashboard/AdminsDb/ManageAllOrders/ManageAllOrders';
import MyOrders from './Pages/Dashboard/UsersDb/MyOrdrs/MyOrders';
import Payment from './Pages/Dashboard/UsersDb/Payment/Payment';
import Review from './Pages/Dashboard/UsersDb/Review/Review';
import MakeAdmin from './Pages/Dashboard/AdminsDb/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/AdminsDb/ManageProducts/ManageProducts';
import Resister from './Pages/SignUpInOut/Resister/Resister';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/explore">
              <AllBikes></AllBikes>
            </Route>

            <PrivateRoute path="/bike/:bikeId">
              <BikeDetails></BikeDetails>
            </PrivateRoute>

            

            {/* <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute> */}
            
            {/* <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute> */}

            

            {/* <PrivateRoute path="/addanewservice">
            <AddANewService></AddANewService>
          </PrivateRoute> */}

            {/* <Route path="/about">
            <About></About>
          </Route> */}
            
            {/* <Route path="/contact">
            <Contact></Contact>
          </Route> */}

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Resister></Resister>
            </Route>

            {/* <Route path="/resister">
            <Resister></Resister>
          </Route> */}

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
