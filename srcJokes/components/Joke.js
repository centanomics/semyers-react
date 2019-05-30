import React from 'react'

function Joke(props) {
  return (
    <div className="joke">
      <h3 style={{display: !props.question && 'none'}}>{props.question}</h3>
      <p style={{color: !props.question && '#888'}}>{props.punchLine}</p>
    </div>
  )
}

export default Joke