import React, { Component } from 'react'
import Product from './Product'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const inventoryList = this.props.inventoryList.map(element => {
            return <Product item={element} />
        })

        return (
            <div>
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard