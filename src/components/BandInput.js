// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.bands)
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>Add a band!</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type='text' onChange={this.handleChange} value={this.state.name} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
