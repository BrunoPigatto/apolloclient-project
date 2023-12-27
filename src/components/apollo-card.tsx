import React from "react";
import styled from "styled-components";

interface ApolloCardProps {
  name: string;
  photo: string;
  description: string;
}

const Card = styled.div`
  max-width: 360px;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  h3 {
    color: #fff;
    padding: 0 4px;
    text-align: center;
    margin: 0 0 12px 0;
  }

  img {
    border-radius: 2px 2px 0 0;
    width: 100%;
    height: 100%;
  }

  div {
    background-color: #240046;
    padding: 16px 20px;
  }

  p {
    margin: 0;
    color: #e0aaff;
  }
`;

export default function ApolloCard(props: ApolloCardProps) {
  return (
    <Card>
      <img alt="location-reference" src={`${props?.photo}`} />
      <div>
        <h3>{props?.name}</h3>
        <p>{props?.description}</p>
      </div>
    </Card>
  );
}
