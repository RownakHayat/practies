import useTitle from '@/components/common/hooks/useTitle';
import React from 'react';
import './styleDashboard.css';  

const Dashboard = () => {
  useTitle('Dashboard');
  return (
    <div className='container'>
      <div className="box">
      <p>Tea</p>
      </div>
    </div>
  );
}

export default Dashboard;
