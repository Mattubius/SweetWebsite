import React from 'react'
import { connect } from 'react-redux'
import { getCustomers, removeCustomer, updateCustomer } from '../../actions/customerActions'
import CustomerRow from '../CustomerRow'

class CustomerReport extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        this.props.getCustomers()
    }

    render() {
        return (
            <div>
                <h4>List of Customers:</h4>
                {
                    this.props.customers.map((customer, index) =>
                        <CustomerRow form={"form" + index} key={index} initialValues={{ ...customer }} updateCustomer={this.props.updateCustomer} removeCustomer={this.props.removeCustomer} CustomerId={customer.CustomerId} />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customerRed.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => dispatch(getCustomers()),
        updateCustomer: (customer) => {
            console.log('in updatecustomerdispatch')
            dispatch(updateCustomer(customer))
        },
        removeCustomer: (CustomerId) => {
            dispatch(removeCustomer(CustomerId))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerReport)