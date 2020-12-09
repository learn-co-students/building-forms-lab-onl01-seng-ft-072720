// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
    }
  }

  handleOnChange = e => {
    this.setState({name: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" onChange={this.handleOnChange} value={this.state.name} />
        <input type="submit" />
      </form>
    )
  }
}

export default BandInput
