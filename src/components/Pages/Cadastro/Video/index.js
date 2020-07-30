import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <div>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </div>
  )
}

export default CadastroVideo;