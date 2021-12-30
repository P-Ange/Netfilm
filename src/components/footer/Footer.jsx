import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">Netfilm</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Accueil</Link>
                        <Link to="/">Nous Contacter</Link>
                        <Link to="/">Conditions Générales</Link>
                        <Link to="/">A Propos</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Politique de Confidentialité</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">A Regarder</Link>
                        <Link to="/">Ajouter Recent</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
