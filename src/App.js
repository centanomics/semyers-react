import React from 'react'

import Joke from './components/Joke'

import './style.css'

function App() {
  return (
    <div className='joke-list'>
      <Joke question='Whats white and black and red all over?' punchLine='A newspaper' />
      <Joke question='Whats an ants worst fear' punchLine='anteaters' />
      <Joke question='What sound does a sheep, drum, and snake make when they fall off of a clip' punchLine='ba dum tss' />
      <Joke question='What did the Buddhist ask the hotdog vendor' punchLine='Make me one with everything' />
      <Joke question='What is red and smells like blue paint' punchLine='red paint' />
    </div>
  )
}

export default App