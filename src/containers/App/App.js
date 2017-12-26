import React from 'react'
import { HomeContainer, AboutContainer } from 'containers'
import { Route, NavLink } from 'react-router-dom'

export default function App(props) {
  return (
    <div>
      <nav>
        <NavLink to='/'><button>{'Home'}</button></NavLink>
        <NavLink to='/about'><button>{'About'}</button></NavLink>
      </nav>
      <main>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/about' component={AboutContainer} />
      </main>
    </div>
  )
}
