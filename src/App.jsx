import './assets/styles/App.css';
import React from 'react';
import './assets/styles/App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Articles } from './components/Article/Articles';
import { Counter } from './components/Counter/Counter';


class App extends React.Component {
  render() {
    return (

      <>
        <Navbar />
        <Articles />
        {/* <Counter /> */}
      </>
    );
  }
}

export default App;
