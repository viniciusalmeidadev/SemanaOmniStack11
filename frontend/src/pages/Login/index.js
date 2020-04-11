import React,{useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Login(){

    const[userId, setUserId] = useState('');
    const[userPassword, setUserPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions/ong', {userId, userPassword});
            localStorage.setItem('Authorization', response.data.token);
            localStorage.setItem('ongId', response.data.id);
            localStorage.setItem('ongName', response.data.name);
            localStorage.setItem('ongname', userId);
            

           history.push('/profile')

        }catch(err){
            alert('Falha no login, tente novamente!');
        }
    }

    return(
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be the Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input 
                    placeholder="Seu username ou e-mail"
                    value={userId}
                    onChange = {e => setUserId(e.target.value)}
                    />

                    <input
                    type="password"
                    placeholder="Sua Senha"
                    value={userPassword}
                    onChange = {e => setUserPassword(e.target.value)}
                    />

                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}

