import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { post } from '../utils/api'

class NewEntry extends Component {
  _submit = (event) => {
    event.preventDefault()
    if (this.isValid) {
      post('entries', {
        term: this.refs.term.value,
        definition: this.refs.definition.value
      }).then(entry => {
        this.props.history.push(`/entry/${entry.slug}`)
      })
    }
  }

  get isValid () {
    return this.refs.term.value.length > 0 &&
    this.refs.definition.value.length > 0
  }

  render () {
    return <div className='NewEntry'>
      <h2>Add an Entry</h2>
      <form action='#' onSubmit={this._submit}>
        <p>
          <label htmlFor='term'>Term</label>
          <input type='text' ref='term' />
        </p>
        <p>
          <label htmlFor='definition'>Definition</label>
          <textarea ref='definition' cols='30' rows='10' />
        </p>
        <p className='actions'>
          <button type='submit'><i className='fa fa-check' /></button>
        </p>
      </form>
    </div>
  }
}

export default withRouter(NewEntry)
