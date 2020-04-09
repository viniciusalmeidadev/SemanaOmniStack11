import React, {useState, useEffect} from 'react';

import {FiArrowLeft} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Incident(props){
    const [incidentName, setIncidentName] = useState('');
    const [collected, setCollected] = useState(10000);
    const [value, setValue] = useState(10000);
    const [percent, setPercent ] = useState(0);
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    

    const history = useHistory();

    async function loadDonations(){
        const id = props.match.params.id;

        if(loading){
            return;
        }

        if(total>0 && donations.length === total){
            return;
        }
        
        setLoading(true);

        const response = await api.get(`donate/${id}`, {
            params:{page}
        });

        const totalres = await api.get(`donate/${id}`);

        setDonations([...donations, ...response.data]);
        setTotal(totalres.headers['Total']);
        setPage(page + 1);
        setLoading(false);
        }

    useEffect(()=>{
        loadDonations();
        const id = props.match.params.id;
       
        async function getCollectedAndValue(){
            const response = await api.get(`incident/${id}`);

            setCollected(response.data.collected);
            setValue(response.data.value);
            setIncidentName(response.data.title);
           
        }

        getCollectedAndValue();
        setPercent(collected * 100/value);
        
        
       
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
                <span>Caso: {incidentName}</span>
                </div>

                <button onClick={handleExit}>
                    <FiArrowLeft size="16" color="#E02041"/>
                </button>
            </header>
            <h2>Total arrecadado:</h2>
            <div className="progressbar-full">
            <strong>{percent.toFixed()}%</strong>
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

            <button className="buttonLoadDonations" onClick={loadDonations}>Carregar mais doadores</button>
        </div>
    )
}