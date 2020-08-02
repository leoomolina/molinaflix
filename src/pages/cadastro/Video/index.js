import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <div>
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

          if (categoriaEscolhida === undefined) throw new Error('Categoria selecionada não encontrada.');

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })
            .then(() => {
              // eslint-disable-next-line no-console
              console.log('Vídeo cadastrado com sucesso!');
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título do Vídeo"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL do Vídeo"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    </div>
  );
}

export default CadastroVideo;
