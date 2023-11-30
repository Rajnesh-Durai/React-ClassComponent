import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import PersonDetails from './features/person/PersonDetails';

class App extends React.Component {
  render(){
    return (
      <>
        <Counter/>
        <br/>
        <PersonDetails/>
      </>
    );
  }
}

export default App;
