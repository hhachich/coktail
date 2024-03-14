import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ALayout from './ALayout';
import DashBoard from './DashBoard';
import User from './user/User';
import UserEdit from './user/UserEdit';
import UserAdd from './user/UserAdd';
import Error from '../../utils/Error';

const AdminRouter = () => {
    return (
        <Routes>
          <Route element={<ALayout/>}> 
            <Route path="dashboard" element={<DashBoard/>}/> 
            <Route path='user'>
                <Route path="index" element={<User/>}/> 
                <Route path="edit" element={<UserEdit/>}/> 
                <Route path="add" element={<UserAdd/>}/> 
            </Route>
            <Route path="*" element={<Error/>}/> 
          </Route>
         
      </Routes>
    );
};

export default AdminRouter;