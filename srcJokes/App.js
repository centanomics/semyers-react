import React from 'react'

import Joke from './components/Joke'

import jokesData from './components/JokeData'

import './style.css'

function App() {

  const jokeComponents = jokesData.map(joke => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    )
  })

  return (
    <div className='joke-list'>
      <h1>Joke List</h1>
      {jokeComponents}
    </div>
  )
}

export default App