import React, { Component } from 'react'
import EntryList from './EntryList'
import { get } from '../utils/api'

class Search extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    this.updateResults()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.query !== this.query) {
      this.updateResults()
    }
  }

  updateResults () {
    get('entries', { q: this.query }).then(entries => this.setState({ entries }))
  }

  get query () {
    return this.props.match.params.query
  }

  render () {
    return <div className='Search'>
      <h2>Searching for "{this.props.match.params.query}"</h2>
      <EntryList entries={this.state.entries} />
    </div>
  }
}

export default Search
