import React, { useState } from 'react';
import './auth.css';
const Longing = () => {

    const[login,setLogin]=useState('')
    const[password,setPassword]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log('formulaire')
    }
    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type='text' name='login' value={login} onChange={e=>setLogin(e.target.value)}></input>
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type='text' name='password' value={password} onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Longing;