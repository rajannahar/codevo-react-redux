import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import HooksIceCreamContainer from './components/HooksIceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import ItemContainer from './components/ItemContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <hr />
        <hr />
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <HooksIceCreamContainer />
        <hr />
        <NewCakeContainer />
        <hr />
      </div>
    </Provider>
  );
}

export default App;
