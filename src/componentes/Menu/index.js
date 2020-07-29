import React from 'react';
import Logo from '../../assets/imagem/Logo.png';
import './Menu.css';
//import ButtonLink from './ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="LeloFlix Log"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;