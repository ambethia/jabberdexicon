import React from 'react'
import { Link } from 'react-router-dom'

const Entry = ({ term, slug }) => 
  <li>
    <Link to={`/entry/${slug}`}>
      {term}
    </Link>
  </li>

const EntryList = ({ entries }) =>
  <ul className='EntryList'>
    {entries.map(entry => <Entry {...entry} key={entry.id} /> )}
  </ul>

export default EntryList
