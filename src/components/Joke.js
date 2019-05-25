import React from 'react'

function Joke(props) {
  return (
    <div className="joke">
      <h3>{props.question}</h3>
      <p>{props.punchLine}</p>
    </div>
  )
}

export default Joke