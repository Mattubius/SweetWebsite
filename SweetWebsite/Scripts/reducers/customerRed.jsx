const customerRed = (state = {
    customers: []
}, action) => {
    switch (action.type) {
        case "CUSTOMERS_GET_FULFILLED":
            state = { ...state, customers: action.payload }
            break;
        case "CUSTOMER_ADD":
            console.log('in add customer', JSON.stringify(action.payload))
            state = { ...state, customers: [...state.customers, action.payload] }
            break;
        case "CUSTOMER_UPDATE":
            let newCustomers1 = state.customers.map((item, index) => {
                if (item.CustomerId === action.payload.CustomerId) {
                    return { ...action.payload };
                }

                return item
            })
            state = { ...state, customers: newCustomers1 }
            break;
        case "CUSTOMER_REMOVE":
            let index = state.customers.findIndex(r => r.CustomerId === action.payload.CustomerId)

            state = { ...state, customers: [...state.customers.slice(0, index), ...state.customers.slice(index+1)]}
            break;
    }

    return state;
}

export default customerRed