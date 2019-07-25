import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <hr />
        </header>
        <main>
          <div className="container fluid">
            <PostForm />
          </div>
          <hr />
          <div className="container-fluid">
            <Posts />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
