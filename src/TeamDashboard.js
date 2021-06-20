import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeamCard from './Components/TeamCard/TeamCard';

function TeamDashboard({ searchTerm }) {
  const [teams, setTeams] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/`
    );

    const items = await data.json();
    setTeams(items);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      {teams
        .filter((el) => {
          if (searchTerm === '') {
            return el;
          } else if (el.name.toLowerCase().includes(searchTerm)) {
            return el;
          }
        })
        .map((el) => {
          return (
            <Link to={`/team/${el.id}`}>
              <TeamCard teamName={el.name} key={el.id} teamId={el.id} />
            </Link>
          );
        })}
    </>
  );
}

export default TeamDashboard;
