import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput bands={this.props.bands} addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: input => dispatch({type: 'ADD_BAND', payload: input})
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)