import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyInfo() {
  return (
    <div>
      <h1>Shannon Myers</h1>
      <p>I am 20 years old and I go to school for web development. I enjoy drinking tea and reading manga.</p>
      <ul>
        <li>Lima, Peru</li>
        <li>Aukland, New Zealand</li>
        <li>Helsinki, Finland</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));