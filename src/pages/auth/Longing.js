import React, { useState } from 'react';
import axios from 'axios';

import './auth.css';
import { useNavigate } from 'react-router-dom';
const Longing = () => {

    let navigate=useNavigate()

    // const[login,setLogin]=useState('')
    // const[password,setPassword]=useState('')

    const[credentials,setCredentials]=useState({
        email:'myMail@gmail.com',
        password:'PWD'
    })
   
    const onChange=(e)=>{
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(credentials)
         axios.post('http://flp-api.francecentral.cloudapp.azure.com/api-docs/auth/login',credentials)
            .then(
                res=>{
                    console.log(res)
                    navigate('/admin')
                }
            )
            .catch(error=>console.log(error))
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='email'>Identifiant</label>
                <input type='text' name='email' value={credentials.email} onChange={onChange} ></input>
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type='text' name='password' value={credentials.password} onChange={onChange} ></input>
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Longing;