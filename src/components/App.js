import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Browse from './Browse'
import Entry from './Entry'
import NewEntry from './NewEntry'
import Search from './Search'
import SearchField from './SearchField'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <header>
          <h1><Link to='/'>The Jabberdexicon</Link></h1>
        </header>
        <nav>
          <ul>
            {ALPHABET.map(l => <li key={l}><NavLink to={`/browse/${l}`}>{l}</NavLink></li>)}
            <li><NavLink to='/browse/0'>#</NavLink></li>
          </ul>
          <SearchField />
        </nav>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/browse/:by' component={Browse} />
            <Route path='/search/:query' component={Search} />
            <Route path='/entry/:slug' component={Entry} />
            <Route path='/new' component={NewEntry} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2017 Jason L Perry. Built with &hearts; at The Iron Yard in Saint Petersburg, FL.</p>
          <p><Link to='/new'>Add an Entry</Link></p>
        </footer>
      </div>
    </Router>
  }
}

export default App
