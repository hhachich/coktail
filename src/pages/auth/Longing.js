import React from 'react';
import './auth.css';
const Longing = () => {
    return (
        <form>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type='text' name='login'></input>
            </div>
            <div className='group'>
                <label htmlFor='password'>Mot de passe</label>
                <input type='text' name='password'></input>
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Longing;