import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name='Anita Sutton' image='https://randomuser.me/api/portraits/women/85.jpg' online />
      <Contact name='Jim George' image='https://randomuser.me/api/portraits/men/2.jpg' />
      <Contact name='Charlotte Ryan' image='https://randomuser.me/api/portraits/women/69.jpg' online />
    </div>
  );
}

export default App;
