import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AbboutMe from './AbboutMe';
import { Link } from 'react-router-dom';


const MainRoots = () => {
    return (
        <div>
            <Routes>

                <Route path='/' element={<HomePage />} />
                <Route path='/AbboutMe' element={<AbboutMe />} />
            </Routes>
        </div>
    );
};

export default MainRoots;