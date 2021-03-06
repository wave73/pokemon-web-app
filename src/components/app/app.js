import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { IndexPage, AboutPage } from '../pages';
import Header from '../header';
import AbilitiesList from '../abilities-list';
import PokemonsPage from '../pokemons-page';

import './app.css';

const App = () => (
  <Router>
    <div className="app">
      <Header />

      <Route path="/" component={IndexPage} exact />
      <Route path="/pokemons" component={PokemonsPage} />
      <Route path="/pokemons/:id" component={PokemonsPage} exact />

      <Route path="/abilities" component={AbilitiesList} />
      <Route path="/about" component={AboutPage} />
    </div>
  </Router>
);

export default App;
