import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, NavbarLink, Nav, NavItem, Button, NavRouteItem } from 'react-bootstrap'

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Sweet Website</Link>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/AddCustomer'>Add Customer</Link></li>
                        <li><Link to='/CustomerReport'>Customer Report</Link></li>
                    </ul>
                </div>
            </nav >
        )
    }
}

//export default Menu

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => {
            var cust = new customerClass('Matt', 'Berry', 'mattberryemail@gmail.com')
            dispatch(getCustomers(cust))
        }
    }
}

export default connect(null, mapDispatchToProps)(Menu)