// src/components/DashboardMainContent/HealthStatusCards.jsx
import React from 'react';
import './HealthStatusCards.css';

const healthCardsData = [
  {
    id: 1,
    title: 'Lungs',
    date: '12 Oct 2021',
    description: 'Requires attention',
    image: '/public/imag/lungs.jpg',
  },
  {
    id: 2,
    title: 'Teeth',
    date: '10 Oct 2021',
    description: 'No issues',
    image: '/public/imag/teeth.jpg',
  },
  {
    id: 3,
    title: 'Bone',
    date: '15 Oct 2021',
    description: 'Bone density low',
    image: '/public/imag/bone.jfif'
  },
];

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      {healthCardsData.map(({ id, title, date, description, image }) => (
        <div key={id} className={`health-card ${status}`}>
          <div className="box">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="info">
              <div className="card-header">
                <h4 className="card-title">{title}</h4>
              </div>
              <p className="card-date">{date}</p>
              <p className="card-description">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
