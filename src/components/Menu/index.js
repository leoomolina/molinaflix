import React from 'react';
import Logo from '../../assets/Img/Logo.png';
import { Link } from 'react-router-dom';
import './Menu.css'
//import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="MolinaFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;