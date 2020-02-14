import React, { Component } from 'react'
import Product from './Product'
import Axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id) {
        Axios.delete(`/api/product/${id}`).then(res => {
            this.props.getList()
        })
    }

    render() {

        const inventoryList = this.props.inventoryList.map(element => {
            return <Product item={element} deleteProduct={this.deleteProduct} />
        })

        return (
            <div>
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard