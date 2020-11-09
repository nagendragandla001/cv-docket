import { Col, Row } from 'antd';
import React from 'react';
import DashboardComponent from '../components/authenticated/dashboard';

const Dashboard = (): JSX.Element => {
    return (
        <div className="dashboard-container">
            <DashboardComponent />
        </div>
    )
};

export default Dashboard;