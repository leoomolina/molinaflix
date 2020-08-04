import React from 'react';
import { FooterBase } from './styles';
import LogoFacebook from '../../assets/Img/logo-facebook.png';
import LogoGitHub from '../../assets/Img/logo-github.png';
import LogoInstagram from '../../assets/Img/logo-instagram.png';
import LogoLinkedin from '../../assets/Img/logo-linkedin.png';
import LogoTwitter from '../../assets/Img/logo-twitter.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        {' '}
        por Leonardo Molina
      </p>
      <p>
        <a href="https://www.instagram.com/leomolina_/">
          <img
            src={LogoInstagram}
            alt="Logo Instagram"
            title="Instagram"
            width="30px"
            height="30px"
          />
        </a>
        {' '}
        <a href="https://www.facebook.com/leomolina0501">
          <img
            src={LogoFacebook}
            alt="Logo Facebook"
            title="Facebook"
            width="30px"
            height="30px"
          />
        </a>
        {' '}
        <a href="https://www.linkedin.com/in/leomolina0501/">
          <img
            src={LogoLinkedin}
            alt="Logo Linkedin"
            title="Linkedin"
            width="30px"
            height="30px"
          />
        </a>
        {' '}
        <a href="https://github.com/leoomolina">
          <img
            src={LogoGitHub}
            alt="Logo GitHub"
            title="GitHub"
            width="30px"
            height="30px"
          />
        </a>
        {' '}
        <a href="https://twitter.com/leoomolina_">
          <img
            src={LogoTwitter}
            alt="Logo Twitter"
            title="Twitter"
            width="30px"
            height="30px"
          />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
