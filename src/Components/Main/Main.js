import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Table from '../Table/Table';
import Calculation from '../Calculation/Calculation';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Table ></Table>
            <Footer></Footer>
        </div>
    );
};

export default Main;