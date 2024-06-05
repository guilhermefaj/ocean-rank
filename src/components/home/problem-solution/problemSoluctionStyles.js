import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15em;
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const Section = styled.div`
    height: 100%;
    width: 50%; /* Cada seção ocupará metade do Container */
    position: relative;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

export const BlurredContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    filter: blur(1px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;


export const Title = styled.h1`
    color: ${props => props.color};
    text-align: center;
    font-size: 2.5rem; /* Aumenta o tamanho da fonte */
    font-weight: bold; /* Adiciona negrito para maior destaque */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adiciona um leve sombreamento ao texto */
`;

export const About = styled.p`
    color: ${props => props.color};
    text-align: center;
    font-size: 1.5rem; /* Aumenta o tamanho da fonte */
    font-weight: bold; /* Adiciona negrito para maior destaque */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Adiciona um leve sombreamento ao texto */
`;
export const ReadMore = styled.button`
    color: ${props => props.color};
    border: 2px solid ${props => props.color};
    border-radius: 10px;
    padding: 6px 2px; /* Reduz ainda mais o padding horizontal */
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1rem; /* Ajusta o tamanho da fonte */
    font-weight: bold; /* Adiciona negrito para maior destaque */
    width: 10em;
    &:hover {
        background-color: ${props => props.color};
        color: black;
    }
`;