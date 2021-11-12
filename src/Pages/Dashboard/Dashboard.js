import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Home/Header/Header';
import './Dashboard.css';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrders from './UsersDb/MyOrdrs/MyOrders';
import Payment from './UsersDb/Payment/Payment';
import Review from './UsersDb/Review/Review';
import MakeAdmin from './AdminsDb/MakeAdmin/MakeAdmin';
import ManageProducts from './AdminsDb/ManageProducts/ManageProducts';
import AddAProduct from './AdminsDb/AddAProduct/AddAProduct';
import ManageAllOrders from './AdminsDb/ManageAllOrders/ManageAllOrders';
import AdminRoute from './AdminRoute/AdminRoute';

const Dashboard = () => {
    const { logOut, admin } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div className="vh">
            <Header />  
            <div className="container">
                <div className="row g-4">
                    <div className="col-2 dash-side-nav">
                        {!admin ?
                            <div>
                                <br />
                                <NavLink className="" to={`${url}`}>My Orders</NavLink>
                                <br />
                                <NavLink className="" to={`${url}/payment`}>Payments</NavLink>
                                <br />
                                <NavLink className="" to={`${url}/review`}>Review</NavLink>
                            </div> :
                            <div>
                                <br />
                                <NavLink className="" to={`${url}`}>Manage All Orders</NavLink>
                                <br />
                                <NavLink className="" to={`${url}/addaproduct`}>Add a Product</NavLink>
                                <br />
                                <NavLink className="" to={`${url}/manageproducts`}>Manage Products</NavLink>
                                <br />
                                <NavLink className="" to={`${url}/makeadmin`}>Make Admin</NavLink>
                                <br />
                                <br />
                            </div>

                        }
                        <button className="button" onClick={logOut}>Log Out</button>
                    </div>
                    <div className="col-10">
                        <Switch>
                            <Route exact path={`${path}`}>
                                {!admin ? 
                                    <MyOrders></MyOrders> :
                                    <ManageAllOrders></ManageAllOrders>
                                }
                            </Route>

                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>

                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>

                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>

                            <AdminRoute path={`${path}/addaproduct`}>
                                <AddAProduct></AddAProduct>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;