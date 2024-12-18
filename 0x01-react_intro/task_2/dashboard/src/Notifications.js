import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';  // Ensure the image is correctly imported

const Notifications = () => {
  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
        aria-label="Close"
        onClick={handleCloseClick}
      >
        <img src={closeIcon} alt="close icon" />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }} />
      </ul>
    </div>
  );
};

export default Notifications;
