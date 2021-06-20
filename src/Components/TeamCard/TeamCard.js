import React from 'react';
import './TeamCard.css';
import teamImage from './user.svg';

function TeamCard({ teamName, teamId }) {
  return (
    <li className="user-dashboard__team" id={teamId}>
      <div className="user-dashboard__img">
        <img src={teamImage} alt="team" />
      </div>
      <div className="user-dashboard__details">
        <div>
          <p className="user-dashboard__teamName">{teamName}</p>
          <p className="user-dashboard__teamId">
            Team Id:
            <span>{teamId}</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default TeamCard;
