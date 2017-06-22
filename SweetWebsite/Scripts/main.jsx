import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import store from './store'
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'
import Menu from './components/menu'
import CustomerReport from './components/pages/CustomerReport'
import AddCustomerForm from './components/pages/AddCustomerForm'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Menu />
                <div className="container">
                    <Route path={"/CustomerReport"} component={CustomerReport} />
                    <Route path={"/AddCustomer"} component={AddCustomerForm} />
                </div>
            </div>
        </BrowserRouter >
    </Provider >
    , window.document.getElementById("app")
)