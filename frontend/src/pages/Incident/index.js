import React, {useState, useEffect} from 'react';

import {FiArrowLeft} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Incident(props){
    const [collected, setCollected] = useState(10000);
    const [value, setValue] = useState(10000);
    const [percent, setPercent ] = useState(0);
    const [donations, setDonations] = useState([]);

    const history = useHistory();

    useEffect(()=>{
        const id = props.match.params.id;
        async function incidentDonations(){
       
        const response = await api.get(`donate/${id}`)

        setDonations(response.data);
        console.log(response);

        }
        incidentDonations();
        async function getCollectedAndValue(){
            const response = await api.get(`incident/${id}`);

            setCollected(response.data.collected);
            setValue(response.data.value)
            console.log(response);
        }

        getCollectedAndValue();

        const date = new Date("Wed Apr 08 2020 12:56:02 GMT-0300 (GMT-03:00)");

        console.log(Intl.DateTimeFormat('pt-BR').format(date));
        
        


     setPercent(collected * 100/value)
       
    },[collected, value])

    const optionsTime = {
        hour: 'numeric', minute: 'numeric',
        
        hour12: false,
        timeZone: 'America/Sao_Paulo' 
      };

    const optionsDate = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour12: false,
        timeZone: 'America/Sao_Paulo' 
      };

      function handleExit(){
        history.push('/profile')
      }
    

    return(
        <div className="incident-container">
            <header>
                <div className="logo-incident">
                <img src={logoImg} alt="bethehero"></img>
                <span>Caso: Compra de livros para biblioteca</span>
                </div>

                <button onClick={handleExit}>
                    <FiArrowLeft size="16" color="#E02041"/>
                </button>
            </header>
            <h2>Total arrecadado:</h2>
            <div className="progressbar-full">
            <strong>{percent}%</strong>
            <div className="progress-bar">
                <div className="preenchimento" style={{width: `${percent}%`}}/>
            </div>
            </div>
            <p className="collected-p">{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(collected)} de {Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(value)}</p>
            <ul>
                {
                    donations.map(donation=>(
                    
                        <li key={donation.id}>
                            <strong>Mensagem:</strong>
                            <p>{donation.message}</p>

                            <strong>Doador:</strong>
                            <p>{donation.username}</p>

                            <strong>Valor:</strong>
                            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(donation.value)}</p>

                            <p className="date">{Intl.DateTimeFormat('pt-BR', optionsDate).format(new Date(donation.dateDonate))} às {Intl.DateTimeFormat('pt-BR', optionsTime).format(new Date(donation.dateDonate))} </p>
                            
                        </li>
                    
                    ))
                }
            </ul>
        </div>
    )
}