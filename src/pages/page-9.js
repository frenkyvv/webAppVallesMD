import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import "bootstrap/dist/css/bootstrap.min.css"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"
import Boton from "../components/botones/BotonLink"
import SirForm from "../components/formulas/SirForm"
import Foot from "../components/sections/Footer"

function Pagina9() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <SEO title="Dobutamina" />
          <TextWrapper>
            <Title>SIR</Title>
            <Line />
            <Description>Secuencia de Intubación Rápida</Description>
          </TextWrapper>
          <br />
          <FormWrapper>
            <SirForm />
          </FormWrapper>
          <BackBut>
            <Link to="/">
              <Boton text="Back" />
            </Link>
          </BackBut>
        </ContentWrapper>
        <FooterDiv>
          <Foot />
        </FooterDiv>
      </Wrapper>
    </Layout>
  )
}

export default Pagina9
const Wrapper = styled.div`
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
  height: 2900px;
`
const ContentWrapper = styled.div`
  width: 100%;
`
const TextWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
`
const Description = styled.p`
  font-size: 13px;
  line-height: 130%;
  margin-top: 10px;
`
const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const BackBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;
`
const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Line = styled.div`
  height: 3px;
  background-color: black;
  width: 350px;
`