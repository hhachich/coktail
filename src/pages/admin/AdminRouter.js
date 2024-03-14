import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ALayout from './ALayout';
import DashBoard from './DashBoard';

const AdminRouter = () => {
    return (
        <Routes>
          <Route element={<ALayout/>}> 
            <Route path="dashboard" element={<DashBoard/>}/> 
          </Route>
         
      </Routes>
    );
};

export default AdminRouter;