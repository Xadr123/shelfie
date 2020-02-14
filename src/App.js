import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Form from './Components/Form';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []

    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    Axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard inventoryList={this.state.inventory} />
        <Form getList={this.componentDidMount} />
      </div>
    )
  }
}

export default App;
