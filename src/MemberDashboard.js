import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MemberCard from './Components/MemberCard/MemberCard';
import './Components/MemberCard/MemberCard.css';
import axios from 'axios';

function MemberDashboard({ searchTerm }) {
  const [members, setMembers] = useState(Object);
  const [user, setUser] = useState([]);
  let allUsers = [];

  const { id: currTeamId } = useParams();

  const fetchItem = async () => {
    let item;
    await axios
      .get(
        `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/${currTeamId}`
      )
      .then((res) => {
        item = res.data;
        setMembers(item);

        const url = `https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/`;

        const allMember = [item.teamLeadId, ...item.teamMemberIds];

        const allMembersUrl = allMember.map((member) => {
          return axios.get(url + member);
        });

        return axios.all(allMembersUrl);
      })
      .then((res) => {
        res.map((user) => {
          return allUsers.push(user.data);
        });

        setUser(allUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <>
      <div class="teamDetail__info">
        <div className="teamDetail__info__row">
          <h3 className="teamDetail__name">
            Team Name: <span>{members.name}</span>
          </h3>
          <h3 className="teamDetail__teamcount">
            No. of Team: <span>{members.teamMemberIds?.length + 1}</span>
          </h3>
        </div>
        <h3 className="teamDetail__teamlead">
          Team Lead: <span>{user[0]?.displayName}</span>
        </h3>
      </div>

      {user
        .filter((el) => {
          if (searchTerm === '') {
            return el;
          } else if (el.displayName.toLowerCase().includes(searchTerm)) {
            return el;
          }
        })
        .map((el) => {
          return (
            <MemberCard
              displayName={el.displayName}
              firstName={el.firstName}
              lastName={el.lastName}
              avatarUrl={el.avatarUrl}
              location={el.location}
              key={el.id}
            />
          );
        })}
    </>
  );
}

export default MemberDashboard;
