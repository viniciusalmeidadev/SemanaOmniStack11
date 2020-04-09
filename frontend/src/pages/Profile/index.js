import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2, FiLogIn} from 'react-icons/fi';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
   

    const JWTtoken = localStorage.getItem('Authorization');
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(()=>{
        api.get('profile/ong', {
            headers: {
                Authorization: `Bearer ${JWTtoken}`,
                ong_id: ongId,
            }
        }).then(response =>{
            setIncidents(response.data);
            console.log(ongId)
        })
    }, [ongId,JWTtoken]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: `Bearer ${JWTtoken}`,
                    ong_id: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id));
        }catch(err){
            alert('Erro ao deletar caso, tente novamente!');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }


    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="be the hero"/>
                <div className="ong-info">
                <span>Bem vinda, {ongName}</span>
                <Link className="a-donations" to="/donations">Ver todas as doações</Link>
                </div>


                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {
                    incidents.map(incident =>(
                     <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>
                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>
                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)}</p>
                        <strong>Arrecadado:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.collected)}</p>
                        <button type="button" onClick = { ()=> handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                        <Link to={`incident/${incident.id}`}> 
                            <FiLogIn size={20} color="#e02041"/>
                        </Link>

                    </li>
                    ))

                }
            </ul>
        </div>
    )
}