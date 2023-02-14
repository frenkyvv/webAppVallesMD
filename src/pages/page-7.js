import React from "react"
import styled from "styled-components"
import Boton from "../components/botones/BotonLink"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import AlteplaseForm from "../components/formulas/AlteplaseForm"
import Foot from "../components/sections/Footer"

export default function Pagina7() {
  return (
    <Layout>
      <Wrapper>
        <ContentWrapper>
          <SEO title="Dopamina" />
          <TextWrapper>
            <Title>Dosis de Alteplase</Title>
            <Line />
            <Description>Formula para el uso del Alteplase</Description>
          </TextWrapper>
          <br />
          <FormWrapper>
            <AlteplaseForm />
          </FormWrapper>
        </ContentWrapper>
        <BackBut>
          <Link to="/">
            <Boton text="Back" />
          </Link>
        </BackBut>
        <FooterDiv>
          <Foot />
        </FooterDiv>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
  height: 800px;
`
const ContentWrapper = styled.div`
  width: 100%;
  height: 400px;
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
  flex-direction: column;
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
  padding-top: 100px;
`
const Line = styled.div`
  height: 3px;
  background-color: black;
  width: 350px;
`