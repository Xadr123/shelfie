import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="product_box">
                <img src={this.props.item.product_image} height="110px" width="170px" />
                <section className="product_details">
                    <div>{this.props.item.product_name}</div>
                    <div>${this.props.item.product_price}</div>
                </section>
            </div>
        )
    }
}

export default Product