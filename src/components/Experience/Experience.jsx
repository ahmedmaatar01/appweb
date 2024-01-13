import React from "react";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import styled from "styled-components";
import ExpCard from "./ExpCard";

const Experience = () => {
    return (
        <>
            <Container id="experience">
                <h4>
                    My <span className="green">Experience</span>
                </h4>

                <ExpCards>
                    <ExpCard
                        // start,end, disc, title,company
                        imglink={"/pixel.png"}
                        company={"Pixel Pro"}
                        start="08/2023"
                        end="Today"
                        title={"Full Stack Developper"}
                        disc={`Full Stack Laravel / React Js Developper In Pixel Pro Agency working on a mega project (Sofonn Solutions)`}
                    />
                    <ExpCard
                        imglink={"/bws.png"}
                        company={"Business Web Service"}
                        start="05/2023"
                        end="08/2023"
                        title={"PHP Developper"}
                        disc={`Php And WordPress Developper in Business Web Service SARL for 3 months`}
                    />
                    <ExpCard
                        imglink={"/sifast.png"}
                        company={"Sifast"}
                        start="07/2022"
                        end="09/2022"
                        title={"Intern"}
                        disc={`Intern In Sifatst for 2 months where i implemented an e-commerce website using prestashop CMS`}
                    />


                </ExpCards>
            </Container>
        </>
    );
};

export default Experience;
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
  h4{
    font-size:2rem;
  }
`;
const ExpCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 1rem;
`;