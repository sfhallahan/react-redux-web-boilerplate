import React from 'react'
import { connect } from 'react-redux'
import { Home } from 'components'
import { toggleValue } from 'redux/modules/exampleReducer'

class HomeContainer extends React.Component {
  render () {
    return (
      <Home
        isItTrue={this.props.isItTrue}
        toggleValue={() => this.props.dispatch(toggleValue())} />
    )
  }
}

function mapStateToProps({exampleReducer}) {
  return {
    isItTrue: exampleReducer.isItTrue
  }
}

export default connect(
  mapStateToProps,
)(HomeContainer)
