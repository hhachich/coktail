import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from '../../utils/Error';
import Longing from './Longing';
const AuthRouter = () => {
    return (
        <Routes>
            <Route index element={<Longing/>} />
            <Route path="login" element={<Longing/>}/> 
            <Route path="*" element={<Error/>}/> 
        </Routes>
    );
};

export default AuthRouter;