import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import Nav from './Nav'
import Info from './Info'
// import Rsvp from './Rsvp'
import '../styles/App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Route exact path='/' component={Info} />
        {/* <Route exact path='/rsvp' component={Rsvp} /> */}
      </div>
    );
  }

}

export default withRouter(App);
