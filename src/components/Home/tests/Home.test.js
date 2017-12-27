import React from 'react'
import Home from '../Home'
import { shallow } from 'enzyme'

describe('<Home />', () => {

  it('renders the isItTrue value', () => {
  const home = shallow(<Home isItTrue={true} toggleValue= {() => (false)} />)
    expect(home.find('h1').text()).toEqual('Currently it is: true')
  })

  it('contains a toggle button', () => {
  const home = shallow(<Home isItTrue={true} toggleValue= {() => (false)} />)
    expect(home.find('button').text()).toEqual('Toggle')
  })

})
