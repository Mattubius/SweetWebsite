import React from 'react'

export class customerForm extends React.Component() {
    render() {
        return (
            <form onSubmit={() => this.props.submitCustomer()}>
                <div>
                    <label htmlFor="forname">Forename:</label>
                    <input id="forname" type="text" />

                    <label htmlFor="surname">Surname:</label>
                    <input id="surname" type="text" />

                    <label htmlFor="email">Email:</label>
                    <input id="email" type="text" />

                    <button onClick={}>Submit</button>
                </div>
            </form>
        )
    }
}