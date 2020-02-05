import React from 'react'

import PurchaseHistory from '../components/Dashboard/PurchaseHistory'
import SavedDesigns from '../components/Dashboard/SavedDesigns'

class AccountDashboard extends React.Component {
    render() {
        return(
            <div>
                <div className="grid account-dashboard">
                    <h1>Account Dashboard</h1>
                </div>
                <PurchaseHistory />
                <SavedDesigns />
            </div>
        )
    }
}

export default AccountDashboard