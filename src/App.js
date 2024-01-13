import logo from './logo.svg';
import './App.css';
import Header from './components/Banner/Header';
import styled from 'styled-components';
import ProfComponent from './components/Banner/ProfComponent';
import WhatIDo from './components/Service/WhatIDo';
import Experience from './components/Experience/Experience';
import Formation from './components/Formation/Formation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <WhatIDo />
      <Experience />
      <Formation />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

export default App;
const Container = styled.div``
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 40px;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
