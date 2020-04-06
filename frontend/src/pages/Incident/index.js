import React from 'react';

import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Incident(){
    return(
        <div className="incident-container">
            <header>
                <div>
                <img src={logoImg} alt="bethehero"></img>
                <span>Caso: Compra de livros para biblioteca</span>
                </div>

                <button>
                    <FiArrowLeft size="16" color="#E02041"/>
                </button>
            </header>
        </div>
    )
}