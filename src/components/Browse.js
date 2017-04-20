import React, { Component } from 'react'
import EntryList from './EntryList'
import { get } from '../utils/api'

class Browse extends Component {
  state = {
    entries: []
  }

  componentDidMount () {
    get('entries').then(entries => this.setState({ entries }))
  }

  get letter () {
    return this.props.match.params.by
  }

  get filteredEntries () {
    return this.state.entries.filter((entry) => {
      return this.letter === '0'
        ? entry.term.match(/^\d/)
        : entry.term[0].toLowerCase() === this.letter
    })
  }

  render () {
    return <div className='Browse'>
      <h2>{this.letter}</h2>
      <EntryList entries={this.filteredEntries} />
    </div>
  }
}

export default Browse
