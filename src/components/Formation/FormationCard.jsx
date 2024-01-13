import React from 'react'
import styled from 'styled-components';

const FormationCard = (props) => {
    const { date, disc, title } = props;
    return (
        <Container>
            <Titre>
                <span className='green'>{date}</span>
                <h1>{title}</h1>
            </Titre>
            <p>{disc}</p>
        </Container>
    )
}

export default FormationCard;
const Titre = styled.div`
display: flex;
align-items: center;
gap: 5px;
span{
    font-size:1rem !important;
}
`
const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 0.8rem;
    padding-left: 2rem;

    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
        padding-bottom: 1rem;

    }
`