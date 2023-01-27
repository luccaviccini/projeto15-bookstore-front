import axios from "axios"
import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import UserContext from "./context/UserContext"
import TopBar from "./TopBar"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Iliada from './../assets/img/iliada.png'
import CrimeCastigo from './../assets/img/crime-e-castigo.png'
import Senhor from './../assets/img/o-senhor.png'
import George from './../assets/img/george.png'

function LandingPage() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <IMG className="d-block w-100"
            src={Iliada}
            alt="Iliada"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <IMG className="d-block w-100"
            src={CrimeCastigo}
            alt="Crime e Castigo"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <IMG className="d-block w-100"
            src={Senhor}
            alt="O Senhor dos Aneis"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <IMG className="d-block w-100"
            src={George}
            alt="1984"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <Text>Find your best friend</Text>
        <Link to="/sign-up"><Button type="submit">Get Started</Button></Link>
      </Container>
    </>
  );
}

const IMG = styled.img`
  max-height: 70vh;
`
const Button = styled.button`
  margin-top: 15px;
  width: 60vw;
  min-height: 44px;
  background: #000000;
  border: 1px solid #545454;
  border-radius: 10px;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: #FBFBFB;
`;

const Container = styled.div`
	background-color: EFEFEF;
	box-sizing: border-box;
	padding: 25px 40px 0 40px;
	width: 100vw;
	height: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  color: #000000;
  margin-bottom: 5px;
`

export default LandingPage