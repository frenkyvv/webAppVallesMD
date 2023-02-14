import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { Link } from "gatsby"
import Boton from "../components/botones/BotonLink"
import Button from "react-bootstrap/Button"
import $ from "jquery"
import Foot from "../components/sections/Footer"

class Pagina11 extends React.Component {
  clickHombre(e) {
    $("#escoger").hide()
    $("#formHom").show()
  }
  clickMujer(e) {
    $("#escoger").hide()
    $("#formMuj").show()
  }
  render() {
    return (
      <Layout>
        <Wrapper>
          <ContentWrapper>
            <SEO title="Deficit de Agua" />
            <TextWrapper>
              <Titulo>Liquidos en Pediatria</Titulo>
              <Line />
              <Description>
                Formula para calcular un plan de liquidos en pediatria
              </Description>
              <div id="escoger">
                <Description1>¿Cuanto pesa el paciente?</Description1>
                <Botones>
                  <Button
                    variant="primary"
                    onClick={this.clickHombre}
                    id="botHom"
                  >
                    -10 kg
                  </Button>
                  <Button
                    variant="primary"
                    onClick={this.clickMujer}
                    id="botMujer"
                  >
                    + 10 kg
                  </Button>
                </Botones>
              </div>
              <FormHombre id="formHom"></FormHombre>
              <FormMujer id="formMuj"></FormMujer>
            </TextWrapper>
          </ContentWrapper>
          <BackBut>
            <Link to="/">
              <Boton text="Home" />
            </Link>
          </BackBut>
          <FooterDiv>
            <Foot />
          </FooterDiv>
        </Wrapper>
      </Layout>
    )
  }
}
export default Pagina11

const Wrapper = styled.div`
  background: linear-gradient(180deg, #697ea0 0%, #69b6fd 100%);
  height: 800px;
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
const Titulo = styled.h1`
  font-weight: bold;
  font-size: 30px;
`
const Description = styled.p`
  font-size: 13px;
  line-height: 130%;
  margin-top: 10px;
`
const Description1 = styled.p`
  font-size: 14px;
  line-height: 130%;
  margin-top: 10px;
  font-weight: bold;
`
const Botones = styled.div`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
const BackBut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 50px;
`
const FormHombre = styled.div`
  display: none;
`
const FormMujer = styled.div`
  display: none;
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
