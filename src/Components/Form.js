import React, { Component } from 'react'
import Axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }

        this.cancelInput = this.cancelInput.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeURL = this.handleChangeURL.bind(this)
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeURL(e) {
        this.setState({
            imgurl: e.target.value
        })
    }

    handleChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    cancelInput() {
        this.setState({
            name: '',
            imgurl: '',
            price: 0
        })
    }

    addProduct(product) {
        Axios.post('/api/product', { product }).then(res => {

        })
        this.props.getList()
        this.cancelInput()
    }

    render() {
        return (
            <div className="entry-form">
                <img className="form_image" src="https://www.tourniagara.com/wp-content/uploads/2014/10/default-img.gif" alt="Missing Image" height="125" width="215" />
                <form className="input_form">
                    Image URL:
                    <input className="input_line" type="text" id="inputs" onChange={this.handleChangeURL} value={this.state.imgurl} />
                    Product Name:
                    <input className="input_line" type="text" id="inputs" onChange={this.handleChangeName} value={this.state.name} />
                    Price:
                    <input className="input_line" type="number" id="inputNum" onChange={this.handleChangePrice} value={this.state.price} />
                </form>
                <section className="form_buttons">
                    <button className="button_form" onClick={() => {
                        this.cancelInput()
                    }}>Cancel</button>
                    <button className="button_form" onClick={() => {
                        console.log(this.state)
                        this.addProduct(this.state)
                    }}>Add to Inventory</button>
                </section>
            </div>
        )
    }
}

export default Form