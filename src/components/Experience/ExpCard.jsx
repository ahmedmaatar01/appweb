import React from 'react'
import styled from 'styled-components';

const ExpCard = (props) => {
    const { start, end, disc, title, company, imglink } = props;
    return (
        <Container>
            <img src={imglink} alt="" />
            <TextPart>
                <h1>{title}</h1>
                <Company>
                    <h4>{company} {" "}</h4><p className='green'> {start}-{end}</p>
                </Company>
                <p>{disc}</p>
            </TextPart>
        </Container>
    )
}

export default ExpCard;
const TextPart = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
const Company = styled.div`
display:flex;
flex-direction:row;
gap:8px;
align-items: center;
justify-content:center;
h4{
    font-size:1rem !important;
}
`
const Container = styled.div`
width: 100%;
background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
padding: 1rem 3rem;
display: flex;
gap: 4rem;
justify-content: flex-start;
align-items: center;
text-align: center;

    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }
    img{
        width:8rem;
    }
    p{
        font-size: 0.8rem;
    }
`