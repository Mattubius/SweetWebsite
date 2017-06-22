import request from 'superagent'

export function addCustomer(customer) {
    console.log('in action', JSON.stringify(customer))
    return {
        type: "CUSTOMER_ADD",
        payload: customer
    }
}

export function removeCustomer(CustomerId) {
    return {
        type: "CUSTOMER_REMOVE",
        payload: {
            CustomerId: CustomerId
        }
    }
}

export function updateCustomer(customer) {
    console.log('In updateCustomerAction', customer.CustomerId, customer.CustomerName)
    return {
        type: "CUSTOMER_UPDATE",
        payload: customer
    }
}

export function getCustomers() {
    console.log('in getcustomers')
    return {
        type: "CUSTOMERS_GET",
        payload: getCustomersAPI()
    }
}

const getCustomersAPI = () => {
    return new Promise((resolve, reject) => {
        request.get('/api/customer')
            .then((res) => {
                console.log("getCustomersAPI", res.body)
                resolve(res.body)
            }, (err) => {
                reject(err)
            })
    }
    )
}

