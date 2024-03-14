import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div className='SideMenu'>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li>&nbsp;</li>
                <li><Link to="/admin/dashboard">DashBoard</Link></li>
                <li>
                    User
                    <ul>
                        <li><Link to="/admin/user/index">Liste</Link></li>
                        <li><Link to="/admin/user/add">Ajouter</Link></li>
                        <li><Link to="/admin/user/edit">Editer</Link></li>
                    </ul>
                </li>
                <li>
                    Cocktail
                    <ul>
                        <li><Link to="/admin/cocktail/index">Liste</Link></li>
                        <li><Link to="/admin/cocktail/edit">Editer</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;