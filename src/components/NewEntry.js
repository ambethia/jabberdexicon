import React, { Component } from 'react'

class NewEntry extends Component {
  render () {
    return <div className='NewEntry'>
      <form action='#'>
        <p>
          <label htmlFor='term'>Term</label>
          <input type='text' ref='term' />
        </p>
        <p>
          <label htmlFor='definition'>Definition</label>
          <textarea ref='definition' cols='30' rows='10' />
        </p>
        <p>
          <button type='submit'>Save</button>
        </p>
      </form>
    </div>
  }
}

export default NewEntry
