import React, { useState, useEffect } from 'react';
import './MemberCard.css';
import RoomIcon from '@material-ui/icons/Room';

function MemberCard({ displayName, firstName, lastName, avatarUrl, location }) {
  return (
    <li className="user-dashboard__team user-dashboard__member">
      <div className="user-dashboard__img user-dashboard__memberImage">
        <img src={avatarUrl} alt="team" />
      </div>
      <div className="user-dashboard__details">
        <div className="user-dashboard__userInfoContainer">
          <div>
            <p className="user-dashboard__displayName">
              User Name:
              <span>{displayName}</span>
            </p>
            <p className="user-dashboard__location">
              <RoomIcon className="location-icon" />
              <span>{location}</span>
            </p>
          </div>
          <p className="user-dashboard__firstName">
            First Name:
            <span>{firstName}</span>
          </p>
          <p className="user-dashboard__lastName">
            Last Name:
            <span>{lastName}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default MemberCard;
