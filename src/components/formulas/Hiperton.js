import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import InputGroup from "react-bootstrap/InputGroup"
import styled from "styled-components"
import $ from "jquery"

class Hiperton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: "",
      edad: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.medioOsmolar = this.medioOsmolar.bind(this)
    this.unoochofx = this.unoochofx.bind(this)
    this.tresres = this.tresres.bind(this)
    this.cincores = this.cincores.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const edad = target.edad

    this.setState({
      [name]: value,
      [edad]: value,
    })
  }

  medioOsmolar(event) {
    const mili = this.state.nombre
    let agua = mili / 2
    $("#buttondiv").hide()
    document.querySelector(
      "#medioOsmo"
    ).textContent = `Necesitas mezclar ${agua} mls de solución salina al 0.9% mas ${agua} ml de Agua inyectable. Con esto tendras una concentracion de ${mili} mls al 0.45%`
    event.preventDefault()
  }

  unoochofx(e) {
    const mili = this.state.nombre
    let wat = mili * 5
    let hiper = wat / 100
    let fis = mili - hiper
    $("#buttondiv").hide()
    document.querySelector(
      "#unoOchodiv"
    ).textContent = `Necesitas mezclar ${fis} ml de solución Salina al 0.9% mas ${hiper} mls de solucion Salina al 17.7% (Hiperton). Con esto tendras una concentración de ${mili} mls al 1.8%`
    e.preventDefault()
  }

  tresres(e) {
    const mili = this.state.nombre
    let wat = mili * 12.3
    let hiper = wat / 100
    let fis = mili - hiper
    $("#buttondiv").hide()
    document.querySelector(
      "#tresresdiv"
    ).textContent = `Necesitas mezclar ${fis} ml de solución Salina al 0.9% mas ${hiper} mls de solucion Salina al 17.7% (Hiperton). Con esto tendras una concentración de ${mili} mls al 3%`

    e.preventDefault()
  }

  cincores(e) {
    const mili = this.state.nombre
    let wat = mili * 24
    let hiper = wat / 100
    let fis = mili - hiper
    $("#buttondiv").hide()
    document.querySelector(
      "#cincoresdiv"
    ).textContent = `Necesitas mezclar ${fis} ml de solución Salina al 0.9% mas ${hiper} mls de solucion Salina al 17.7% (Hiperton). Con esto tendras una concentración de ${mili} mls al 5%`
    e.preventDefault()
  }

  render() {
    return (
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Mililitros
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="nombre"
            type="number"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </InputGroup>
        <ButtonDiv id="buttondiv">
          <Button variant="primary" onClick={this.medioOsmolar}>
            0.45 %
          </Button>
          <Button variant="primary" onClick={this.unoochofx}>
            1.8 %
          </Button>
          <Button variant="primary" onClick={this.tresres}>
            3 %
          </Button>
          <Button variant="primary" onClick={this.cincores}>
            5 %
          </Button>
        </ButtonDiv>
        <Resultado>
          <div id="medioOsmo"></div>
          <div id="unoOchodiv"></div>
          <div id="tresresdiv"></div>
          <div id="cincoresdiv"></div>
        </Resultado>
      </Form>
    )
  }
}

export default Hiperton

const Resultado = styled.div`
  #medioOsmo {
    text-align: center;
    max-width: 300px;
    color: white;
    font-size: 15px;
  }
  #unoOchodiv {
    text-align: center;
    max-width: 300px;
    color: white;
    font-size: 15px;
  }
  #tresresdiv {
    text-align: center;
    max-width: 300px;
    color: white;
    font-size: 15px;
  }
  #cincoresdiv {
    text-align: center;
    max-width: 300px;
    color: white;
    font-size: 15px;
  }
`
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin-left: -20px;
  padding-top: 30px;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding-left: 42px;
`
