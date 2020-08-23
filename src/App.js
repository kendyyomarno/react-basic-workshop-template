import React from 'react';

import './App.css';
import { HOME_PATH } from './routes'
import Home from './routes/Home'
import Header from './components/Header'

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Header />
        <div className = 'container'>
          <Home />
        </div>
      </div>
    )
  }
}

export default App