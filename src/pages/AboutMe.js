import {Container, Image, Row, Col} from "react-bootstrap";
import '../App.css';
import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import Messenger from '../assets/social.png'



const AboutMe = () => {
    return (
        <div className="page-host">
            <Container>
                    <SocialIcon url="https://www.facebook.com/simon.baecke.9" fgColor="white" ></SocialIcon>
                    <SocialIcon url="https://twitter.com/BaeckeSimon" fgColor="white" >></SocialIcon>
                    <SocialIcon url="https://github.com/simonbaecke" fgColor="white" >></SocialIcon>
                    <SocialIcon url="https://www.linkedin.com/in/simonbaecke" fgColor="white" >></SocialIcon>
                    <a href="https://m.me/simon.baecke.9"> <Image src={Messenger}  style={{ height: 100, width: 100 }} fluid></Image></a>
            </Container>

        </div>
    )
}


export default AboutMe

