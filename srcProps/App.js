import React from 'react'

import ContactCard from './components/ContactCard'

function App() {
  return (
    <div className='contacts'>
      <ContactCard 
        contact={{name: 'Mr. Whiskerspoon', imgUrl: 'http://placekitten.com/200/300', phone: '(123)-456-7890', email: 'mr.whisker@gmail.meow'}}
      />
      <ContactCard 
        contact={{name: 'Shannon Myers', imgUrl: 'http://placekitten.com/200/200', phone: '(456)-456-7890', email: 'mr.whisker@gmail.meow'}}
      />
      <ContactCard 
        contact={{name: 'Major Marr', imgUrl: 'http://placekitten.com/300/200', phone: '(789)-456-7890', email: 'mr.whisker@gmail.meow'}}
      />
      <ContactCard 
        contact={{name: 'Momo Numan', imgUrl: 'http://placekitten.com/300/300', phone: '(987)-456-7890', email: 'mr.whisker@gmail.meow'}}
      />
    </div>
  )
}

export default App