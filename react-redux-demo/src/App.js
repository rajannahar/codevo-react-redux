import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <HooksIceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
