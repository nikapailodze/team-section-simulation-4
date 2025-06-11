import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const Name = styled.h3`
  margin: 0.5rem 0 0.2rem 0;
`;

const Title = styled.p`
  color: gray;
`;

const SocialLinks = styled.div`
  margin-top: 0.5rem;
  a {
    margin: 0 5px;
    color: black;
    text-decoration: none;
  }
`;

const Post = ({ name, title, image, social }) => (
  <Card>
    <Avatar src={image} alt={name} />
    <Name>{name}</Name>
    <Title>{title}</Title>
    <SocialLinks>
      <a href={social.facebook}>FB</a>
      <a href={social.twitter}>TW</a>
      <a href={social.youtube}>YT</a>
    </SocialLinks>
  </Card>
);

export default Post;
