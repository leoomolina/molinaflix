import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <div>
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <form>
          <label>
            Nome da Categoria:
            <input type="text" />
          </label>

          <button>Cadastrar</button>
        </form>

        <Link to="/">
          Home
        </Link>
      </PageDefault>
    </div>
  )
}

export default CadastroCategoria;