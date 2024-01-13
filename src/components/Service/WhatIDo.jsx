import React from "react";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";

const WhatIDo = () => {
    return (
        <>
            <Container id="service">
                <h4>
                    My <span className="green">services</span>
                </h4>
                <h1>What I Do</h1>
                <Cards>
                    <Card
                        Icon={FaLaravel}
                        title={"Back End Developpment"}
                        disc={`I specialize in backend development, leveraging the power of Laravel to create robust and scalable web applications.`}
                    />
                    <Card
                        Icon={FaReact}
                        title={"Front End Developpment"}
                        disc={`With expertise in frontend development, I craft dynamic and user-friendly interfaces using React JS for a seamless and engaging user experience.`}
                    />
                    <Card
                        Icon={FaWordpress}
                        title={"CMS Developpment"}
                        disc={`As a CMS developer, I excel in WordPress, providing tailored solutions for content management, ensuring a flexible and efficient website management experience.`}
                    />
                </Cards>
            </Container>
        </>
    );
};

export default WhatIDo;
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