import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Vamos dar uma voltinha? A Serra do Cipó, faz jus a um dos conjuntos naturais mais exuberantes do planeta.
        A topografia acidentada e a grande quantidade de nascentes formam diversos rios, cachoeiras, cânions e cavernas de excepcional beleza natural.
        A Serra do Cipó localiza-se na porção sul da Serra do Espinhaço"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
    </div>
  );
}

export default Home;
