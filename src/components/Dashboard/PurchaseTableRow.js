import React from 'react'
import { Link } from 'react-router-dom'

class PurchaseTableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.order.configuration.height}
                </td>
                <td>
                    {this.props.order.configuration.width}
                </td>
                <td>
                    {this.props.order.configuration.depth}
                </td>
                <td>
                    {this.props.order.configuration.colour}
                </td>
                <td>
                    {this.props.order.review}
                </td>
                <td>
                    <Link to={`/leave-review/${this.props.order._id}`}><button type='button'>Leave a Review</button></Link>
                </td>
            </tr>
        );
    }
}

export default PurchaseTableRow