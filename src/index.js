import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/Home';
import CadastroVideo from './components/Pages/Cadastro/Video'
import CadastroCategoria from './components/Pages/Cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={Home} exact />
      <Route component={() => (<div>Página 404!</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
