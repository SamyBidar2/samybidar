import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

//#region 
const FooterContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 20px 0px;
    border-top: 1px solid white;
`;

const IconContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: white;
    font-size: 15px;
    margin-bottom: 16px;
`;

const WorkTogether = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

const Footertext = styled.p`
    color: white;
    font-size: 15px;
    text-align: center;
`;

const PenIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 15px;
    text-align: center;
    margin-bottom: 16px;
`;
//#endregion

export const Footer = () => {
    return (
        <FooterContainer className="footer-container">
            <Footertext>Samy Bidar ©</Footertext>
            <WorkTogether>
                <Footertext>Travaillons Ensemble </Footertext>
                <a href="mailto:samybidarpro@gmail.com" target="_blank" rel="noreferrer"><PenIcon icon={faPencil} className='text-light'/></a>
            </WorkTogether>
            <IconContainer>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='text-light' /></a>
                <a href='https://www.linkedin.com/in/samybidar/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-light' /></a>
                <a href='https://github.com/SamyBidar2' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='text-light' /></a>
            </IconContainer>
        </FooterContainer>
    )
}
