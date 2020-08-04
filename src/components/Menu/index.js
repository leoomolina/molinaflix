import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu({ cadastroCategoria }) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="MolinaFlix Logo" />
      </Link>

      {cadastroCategoria ? (
        <Button as={Link} className="ButtonLink" to="/cadastro/categoria">
          Nova Categoria
        </Button>
      )
        : (
          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
          </Button>
        )}
    </nav>
  );
}

Menu.defaultProps = {
  cadastroCategoria: false,
};

Menu.propTypes = {
  cadastroCategoria: PropTypes.bool,
};

export default Menu;
