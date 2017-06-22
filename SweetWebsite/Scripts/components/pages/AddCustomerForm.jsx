import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import request from 'superagent'
import { addCustomer } from '../../actions/customerActions'

const addCustomerAPI = (data) => {
    console.log(JSON.stringify(data))
    return new Promise((resolve, reject) => {
        request.post("api/customer")
            .set('Accept', 'application/json')
            .send(data)
            .then(res => {
                resolve(res.body)
            },
            err => {
                reject(err)
            })
    }
    )
}


class AddCustomer extends React.Component {
    addCustomer = data => {
        console.log('customer added', JSON.stringify(data))
        return addCustomerAPI(data)
            .catch(err => { throw new SubmissionError({ _error: "Failed to add customer" }) })
            .then(res => {
                this.props.addCustomer(res)
                alert("Customer Saved")
            })

    }
    render() {
        const { handleSubmit, error, submitting, pristine } = this.props
        return (
            <div>
                <h1>Add Customer Page</h1>
                <form onSubmit={handleSubmit(this.addCustomer.bind(this))}>
                    <div className="form-group">
                        <label className="control-label">Forename</label>
                        <Field name='customerforename' className="form-control" component='input' type='text' placeholder="Customer Forname" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Surname</label>
                        <Field name='customersurname' className="form-control" component='input' type='text' placeholder="Customer Surname" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <Field name='customeremail' className="form-control" component='input' type='email' placeholder="Customer Email" />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" type='submit'>Add</button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>
        )
    }
}

//export default AddCustomerForm
const mapDispatchToProps = (dispatch) => {
    return ({
        addCustomer: (cust) => {
            console.log("in dispatch", JSON.stringify(cust))
            dispatch(addCustomer(cust))
        }
    })
}

let AddCustomerForm = reduxForm({
    form: "customer"
})(AddCustomer)

export default connect(null, mapDispatchToProps)(AddCustomerForm)