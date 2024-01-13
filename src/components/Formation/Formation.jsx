import React from "react";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import styled from "styled-components";
import Card from "./FormationCard";

const Formation = () => {
    return (
        <>
            <Container id="formation">
                <h4>
                    My <span className="green">academic career</span>
                </h4>
                <h1>Education</h1>
                <Cards>
                    <Card
                        date={"2021-today"}
                        title={"IPSAS"}
                        disc={`Degree: Engineer's Degree, Programming / Computer Developer`}
                    />
                    <Card
                        date={"2018-2021"}
                        title={"ISIMS"}
                        disc={`Degree: Applied Bachelor's in Computer and Multimedia Science`}
                    />

                </Cards>
            </Container>
        </>
    );
};

export default Formation;
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;