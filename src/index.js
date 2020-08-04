import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import Home from './pages/Home';
import PageDefault from './components/PageDefault';

const Pagina404 = () => (
  <PageDefault>
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
    }}
    >
      <h1>Ops, algo deu errado! :O</h1>
      <p>
        Você pode jogar ou
        {' '}
        <a href="/">voltar pra home</a>
        {' '}
        :)
      </p>
      <iframe
        title="Flappy Bird Game"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
        width="340"
        height="600"
        style={{ border: '1px solid #000', display: 'block', margin: '0 auto' }}
      />
    </div>
  </PageDefault>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
