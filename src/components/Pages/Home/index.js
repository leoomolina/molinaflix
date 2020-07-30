import React from 'react';
import dadosIniciais from '../../../data/dados_iniciais.json'
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import PageDefault from '../../PageDefault';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <PageDefault>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"Uma das maiores viradas da história do Tricolor da capital paulista"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
      </PageDefault>
    </div>
  );
}

export default Home;
