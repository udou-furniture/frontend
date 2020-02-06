import React from 'react'
import axios from 'axios'

import PurchaseTableRow from './PurchaseTableRow'

import {getLocalStorageToken} from '../../utils/localStorage'

class PurchaseHistory extends React.Component {
    state = {
        purchases: []
    }
    
    async componentDidMount() {
        const token = getLocalStorageToken()
        await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/orders/my-orders", { headers: {
            Authorisation: `Bearer ${token}`}})
        .then(response => {
            this.setState({purchases: response.data})
        })
        .catch(err => {
            console.log(err)
        })
    }

    mapTableData() {
        return this.state.purchases.map(function(object, i){
           return <PurchaseTableRow order={object} key={i} />
        })
    }

    render() {
        return(
            <div className="purchased-header">
                <h4>Previously Purchased</h4>
                <div className="dashboard-grid">
                    { this.mapTableData() }
                </div>
            </div>
        )
    }
}

export default PurchaseHistory