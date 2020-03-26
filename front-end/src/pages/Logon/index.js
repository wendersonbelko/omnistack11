import React from 'react';
import './style.css';
import '../../all.css';

import { FiLogIn } from 'react-icons/fi';

import logoHeroes from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoHeroes} alt="Be the Hero"/>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"/>
                    <button type="submit">Entrar</button>

                    <FiLogIn size={16} color="E02041" />
                    <a href="/register">Não tenho um cadastro.</a>
                </form>

            </section>

            <img src={heroesImg} alt="heroes" />
        </div>
    )
}

export default Logon;