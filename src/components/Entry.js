import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../utils/api'

class Entry extends Component {
  state = {
    entry: null
  }

  componentDidMount () {
    this.loadEntry()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.slug !== this.slug) {
      this.loadEntry()
    }
  }

  loadEntry () {
    get(`entries/${this.slug}`).then(entry => this.setState({ entry }))
  }

  get slug () {
    return this.props.match.params.slug
  }

  render () {
    const { entry } = this.state
    if (entry) {
      return <div className='Entry'>
        <header>
          <h2>{entry.term}</h2>
          <ul>
            <li>
              <Link to={`/entry/${entry.slug}/edit`} title='Edit'><i className='fa fa-pencil' /></Link>
            </li>
            <li>
              <Link to={`/entry/${entry.slug}/delete`} title='Delete'><i className='fa fa-trash' /></Link>
            </li>
          </ul>
        </header>
        <div className='definition' dangerouslySetInnerHTML={{__html: entry.formatted_definition}} />
      </div>
    } else {
      return <h2>Loading...</h2>
    }
  }
}

export default Entry
