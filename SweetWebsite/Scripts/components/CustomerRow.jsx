import React from 'react'
import request from 'superagent'
import { Field, reduxForm } from 'redux-form'

class CustomerRow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            CustomerId: props.CustomerId,
            CustomerName: props.CustomerName
        }

        this.updateCustomer = this.updateCustomer.bind(this)
        this.removeCustomer = this.removeCustomer.bind(this)

    }


    updateCustomerAPI = (values) => {
        return new Promise((resolve, reject) => {
            request.put('api/Customer/' + values.CustomerId)
                .set('Content-Type', 'application/json')
                .send(values)
                .then(res => {
                    resolve(res.body)
                },
                err => reject(err)
                )
        }
        )
    }

    updateCustomer = (values) => {
        return this.updateCustomerAPI(values)
            .catch(err => alert('Problem updating customer'))
            .then(res => {
                console.log('in updatecustomer', res)
                this.props.updateCustomer(res)
                alert('Updated')
            })
    }

    removeCustomerAPI = (CustomerId) => {
        return new Promise((resolve, reject) => {
            request.delete('api/Customer/' + CustomerId)
                .set('Content-Type', 'application/json')
                .then(res =>
                    resolve(res.body),
                err => reject(err)
                )
        }
        )
    }

    removeCustomer = (e) => {
        return this.removeCustomerAPI(this.props.CustomerId)
            .catch(err =>
                alert('Problem removing'))
            .then(res =>
                this.props.removeCustomer(res.CustomerId))
    }

    render() {
        const { handleSubmit, error, submitting } = this.props
        return (
            <div className="formContainer">
                <form onSubmit={handleSubmit(this.updateCustomer)}>
                    <div className="form-group">
                        <label className="control-label">Forename</label>
                        <Field name="CustomerForename" className="form-control" component="input" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Surname</label>
                        <Field name="CustomerSurname" className="form-control" component="input" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <Field name="CustomerEmail" className="form-control" type="email" component="input" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Update</button>
                        <button className="btn btn-primary" type="button" style={{marginLeft: "10px"}} name="deleteCustomer" onClick={this.removeCustomer}>Remove</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: "customer", enableReinitialize: true })(CustomerRow)
