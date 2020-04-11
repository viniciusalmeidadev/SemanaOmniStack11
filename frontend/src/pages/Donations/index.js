import React, {useState, useEffect} from 'react';

import {FiArrowLeft} from 'react-icons/fi';
import {useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Donations() {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [donations, setDonations] = useState([]);
    const [total, setTotal]=useState(0);
    const ongname = localStorage.getItem('ongname');

    const history = useHistory();

    async function loadDonations(){
        if(loading){
            return;
        }

        if(total > 0 && donations.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('/donation/ong', {
            headers:{ongname},
            params: {page},
        })

        console.log(response.data)

        setDonations([...donations, ...response.data]);
        setTotal(response.headers['X-Total-Count']);
        setPage(page + 1);
        setLoading(false)
    }

    useEffect(()=>{
        loadDonations();
    },[])

    function handleExit(){
        history.push('/profile');
    }

    const optionsTime = {
        hour: 'numeric', minute: 'numeric',
        
        hour12: false,
        
      };

    const optionsDate = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour12: false,
        timeZone: 'America/Sao_Paulo' 
      };

  return (
        <div className="donations-container">
            <header>
                <img src={logoImg} alt="bethehero"/>
                <button onClick={handleExit}>
                    <FiArrowLeft size={20} color="#E02041"/>
                </button>
            </header>
            <h2>Doações recebidas:</h2>
            
            <ul>
                {donations.map(donation =>(
                <li key={donation.id}>
                    <strong>CASO:</strong>
                    <p>{donation.title}</p>
                    <strong>MENSAGEM:</strong>
                    <p>{donation.message}</p>
                    <strong>DOADOR:</strong>
                    <p>{donation.username}</p>
                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(donation.value)}</p>
                    <p className="date">{Intl.DateTimeFormat('pt-BR', optionsDate).format(new Date(donation.dateDonate))} às {Intl.DateTimeFormat('pt-BR', optionsTime).format(new Date(donation.dateDonate))}</p>

        
                </li>

                
                ))}
            </ul>

            <button onClick={loadDonations} className="buttonLoadDonations">Carregar mais doações</button>
        </div>
  );
}
