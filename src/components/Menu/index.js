import React from 'react';
import Logo from '../../assets/Img/Logo.png';
import './Menu.css'
//import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MolinaFlix Logo" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;