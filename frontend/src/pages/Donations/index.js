import React, {useState, useEffect} from 'react';

import {FiArrowLeft} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Donations() {
  return (
        <div className="donations-container">
            <header>
                <img src={logoImg} alt="bethehero"/>
                <button>
                    <FiArrowLeft size={20} color="#E02041"/>
                </button>
            </header>
            <strong>Doações recebidas</strong>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>caso qualquer</p>
                    <strong>Mensagem</strong>
                    <p>ola</p>
                    <strong>Doador:</strong>
                    <p>Viniciusalmeida</p>
                    <strong>Valor:</strong>
                    <p>R$400,00</p>
                    <p>08/04 às 17:02</p>

        
                </li>
            </ul>
        </div>
  );
}
