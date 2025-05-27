import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const activityData = [
    { day: 'Mon', values: [30, 50] },
    { day: 'Tue', values: [60] },
    { day: 'Wed', values: [20, 40, 30] },
    { day: 'Thu', values: [50] },
    { day: 'Fri', values: [20, 50] },
    { day: 'Sat', values: [20] },
    { day: 'Sun', values: [40, 20] },
  ];

  return (
    <div className="activity-feed">
      <div className="heading">
        <h3 className="feed-title">Activity</h3>
        <p className="activity-summary">3 appointments this week</p>
      </div>

      <div className="bar-chart">
        {activityData.map((item, index) => (
          <div className="bar-item" key={index}>
            <div className="bar-stack">
              {item.values.map((value, i) => (
                <div
                  key={i}
                  className="bar"
                  style={{ height: `${value}%` }}
                  title={`${item.day} - ${value}%`}
                ></div>
              ))}
            </div>
            <div className="day-label">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
