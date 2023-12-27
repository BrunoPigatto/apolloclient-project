import "./App.css";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import ApolloCard from "./components/apollo-card.tsx";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1120px;
`;
const GridCards = styled.div`
  margin-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
`;

const TitleH1 = styled.h1`
  margin: 0;
  color: #fff;
  text-align: center;
  padding-top: 80px;
`;

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro : {error.message}</p>;

  return (
    <GridCards>
      {data?.locations?.map(({ id, name, description, photo }) => (
        <ApolloCard
          key={id}
          name={name}
          description={description}
          photo={photo}
        />
      ))}
    </GridCards>
  );
}

export default function App() {
  return (
    <Container>
      <TitleH1>Apollo app 🚀</TitleH1>
      <DisplayLocations />
    </Container>
  );
}
