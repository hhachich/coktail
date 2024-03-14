import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ALayout from './ALayout';
import DashBoard from './DashBoard';
import User from './user/User';
import UserEdit from './user/UserEdit';
import UserAdd from './user/UserAdd';
import Error from '../../utils/Error';
import CocktailEdit from './cocktail/CocktailEdit';
import Cocktail from './cocktail/Cocktail';

const AdminRouter = () => {
    return (
        <Routes>
          <Route element={<ALayout/>}> 
          <Route index element={<DashBoard/>} />
            <Route path="dashboard" element={<DashBoard/>}/> 
            <Route path='user'>
                <Route path="index" element={<User/>}/> 
                <Route path="edit/:uid" element={<UserEdit/>}/> 
                <Route path="add" element={<UserAdd/>}/> 
            </Route>
            <Route path='cocktail'>
                <Route path="index" element={<Cocktail/>}/> 
                <Route path="edit" element={<CocktailEdit/>}/> 
            </Route>
            <Route path="*" element={<Error/>}/> 
          </Route>
         
      </Routes>
    );
};

export default AdminRouter;