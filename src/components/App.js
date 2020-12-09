import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Navbar'
import CharactersList from './CharactersList'
import Character from './Character'


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <Navbar />
    <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Switch>
        <Route exact path="/characters" component={CharactersList} />
        <Route exact path="/character/:id" component={Character} />
      </Switch>
    </div>
  </Suspense>
  );
}

export default App;
