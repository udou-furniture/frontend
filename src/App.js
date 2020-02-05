import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './OOCSS.css';

import Home from './pages/Home';
import Navbar from './components/navbar/Navbar'
import Login from './pages/Login';
import ProductsIndex from './pages/ProductsIndex';
import Registration from './pages/Registration';
import ProductView from './pages/ProductView';
import ReviewFormPage from './pages/ReviewFormPage';
import AccountDashboard from './pages/AccountDashboard';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import PaymentComplete from './pages/PaymentComplete';
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
    state = {
        authed: false,
        loading: true,
        dropdown: false,
        linkOn: false
    };

 
    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdown: !prevState.dropdown,
            linkOn: true
        }));
    };

    removeDropdown = () => {
        if (this.state.dropdown) {
            this.setState(prevState => ({
                dropdown: !prevState.dropdown,
                linkOn: false
            }));
        }
    }

    componentDidMount() {
        this.isUserLoggedIn();
    }

    isUserLoggedIn = async () => {
        try {
            const token = localStorage.getItem('authorisation');
            await axios.get(process.env.REACT_APP_BACKEND_URL + '/api/customer/check-token', { 
                headers: {
                    Authorisation: `Bearer ${token}`
                }
            });
            this.setState({
                authed: true,
                loading: false
            });
        } catch (err) {
            this.setState({
                authed: false,
                loading: false
            });
        }
    };

    render() {
        if (this.state.loading) {
            return null;
        } else {
            return (
                <BrowserRouter>
                    <div className="App" onClick={this.removeDropdown}>
                        <Navbar authed={this.state.authed} isUserLoggedIn={this.isUserLoggedIn} dropdown={this.state.dropdown} toggleDropdown={this.toggleDropdown} linkOn={this.state.linkOn} history={this.props.history}/>
                        <Switch>
                            <Route exact path="/" component={Home} />

                            <Route path="/registration" render={(props) => {
                                return <Registration isUserLoggedIn={this.isUserLoggedIn} {...props} />
                            }}  />
                            <Route path="/login" render={(props) => {
                                return <Login isUserLoggedIn={this.isUserLoggedIn} {...props} />
                            }} />
                            {/* Order of the below two routes is important. Don't change without reason */}
                            <Route path="/products/:type/:product_id" render={(props) => {
                                return <ProductView isUserLoggedIn={this.isUserLoggedIn} authed={this.state.authed} {...props} />
                            }} />
                            {/* <Route path="/products/:type/:product_id" component={ProductView} authed={this.state.authed}/> */}
                            <Route path="/products/:type" component={ProductsIndex} />

                            {/* <Route path="/cart" render={(props) => {
                                return <CartIcon authed={this.state.authed} history={this.props.history} {...props} />
                            }} /> */}
                            <Route path="/product_view" component={ProductView} type={"custom"} name={"Shelf"} />
                            
                            <PrivateRoute exact path="/leave-review/:orderID" component={ReviewFormPage} authed={this.state.authed}/>
                            <PrivateRoute exact path="/account" component={AccountDashboard} authed={this.state.authed}/>
                            <PrivateRoute exact path="/checkout" component={Checkout} authed={this.state.authed} />
                            <PrivateRoute exact path="/payment" component={Payment} authed={this.state.authed} />
                            <PrivateRoute exact path="/payment-complete" component={PaymentComplete} authed={this.state.authed} />
                        </Switch>
                    </div>
                </BrowserRouter> 
            );
        }
    }
}


export default App;
