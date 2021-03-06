import {createContext, useReducer} from 'react';
import { v4 as uid } from 'uuid';
import * as ActionTypes from '../Actions'
import customerReducer from './customerReducer';

import { generateCustomers} from '../../data/customers';



export const CustomerContext = createContext();



const CustomerState = props => {
    const initialState = {
        customers: generateCustomers(),
        filteredCustomers: null
    }

    const [state, dispatch] = useReducer(customerReducer, initialState)
    const getCustomers = async () => {
        try {
            if(this.initialState.customers === null){
                
            }else{
                dispatch({
                    type: ActionTypes.GET_CUSTOMERS
                })
            }
        } catch(err){

        }
    }

    const searchCustomers = async criteria => {
        try{
            dispatch({
                type: ActionTypes.FILTER_CUSTOMERS,
                payload: criteria
            })
        } catch(err){
        }
    }
    const updateCustomer = async customer => {
        try{
            dispatch({
                type: ActionTypes.UPDATE_CUSTOMER,
                payload: customer
            })
        } catch(err){
        }
    }

    const resetCustomers = () => {
        dispatch({type: ActionTypes.RESET})
    }

    return (
        <CustomerContext.Provider
            value= {{
                customers: state.customers,
                filteredCustomers: state.filteredCustomers,

                getCustomers,
                searchCustomers,
                updateCustomer,
                resetCustomers
            }}>
                {props.children}
        </CustomerContext.Provider>
    )
}

export default CustomerState
