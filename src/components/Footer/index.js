import React from 'react';
import { FooterBase, ExtraLink } from './styles';
import LogoFacebook from '../../assets/Img/logo-facebook.png';
import LogoGitHub from '../../assets/Img/logo-github.png';
import LogoInstagram from '../../assets/Img/logo-instagram.png';
import LogoLinkedin from '../../assets/Img/logo-linkedin.png';
import LogoTwitter from '../../assets/Img/logo-twitter.png';

function Footer() {
  return (
    <FooterBase>
      <ExtraLink>
        <a href="https://www.alura.com.br/">
          <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
        </a>
      </ExtraLink>
      <p>
        Orgulhosamente criado durante a
        <ExtraLink>
          <a href="https://www.alura.com.br/">
            Imersão React da Alura
          </a>
        </ExtraLink>
        por Leonardo Molina
      </p>
      <p>
        <ExtraLink>
          <a href="https://www.instagram.com/leomolina_/">
            <img
              src={LogoInstagram}
              alt="Logo Instagram"
              title="Instagram"
              width="20px"
              height="20px"
            />
          </a>
        </ExtraLink>
        <ExtraLink>
          <a href="https://www.facebook.com/leomolina0501">
            <img
              src={LogoFacebook}
              alt="Logo Facebook"
              title="Facebook"
              width="20px"
              height="20px"
            />
          </a>
        </ExtraLink>
        <ExtraLink>
          <a href="https://www.linkedin.com/in/leomolina0501/">
            <img
              src={LogoLinkedin}
              alt="Logo Linkedin"
              title="Linkedin"
              width="20px"
              height="20px"
            />
          </a>
        </ExtraLink>
        <ExtraLink>
          <a href="https://github.com/leoomolina">
            <img
              src={LogoGitHub}
              alt="Logo GitHub"
              title="GitHub"
              width="20px"
              height="20px"
            />
          </a>
        </ExtraLink>
        <ExtraLink>
          <a href="https://twitter.com/leoomolina_">
            <img
              src={LogoTwitter}
              alt="Logo Twitter"
              title="Twitter"
              width="20px"
              height="20px"
            />
          </a>
        </ExtraLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
