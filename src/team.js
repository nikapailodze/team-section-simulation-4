import React from 'react';
import styled from 'styled-components';
import Post from './post';
import { teamData } from './teamData';

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

const Team = () => (
  <>
    <h2 style={{ textAlign: "center" }}>Team</h2>
    <TeamContainer>
      {teamData.map((member, index) => (
        <Post key={index} {...member} />
      ))}
    </TeamContainer>
  </>
);

export default Team;
