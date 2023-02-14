import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import InputGroup from "react-bootstrap/InputGroup"
import styled from "styled-components"

class BicarbonatoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: "",
      edad: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleSubmit(event) {
    const pes = this.state.nombre
    const hco = this.state.edad
    let pesr = pes * 0.4
    let hcor = 24 - hco
    let resu = pesr * hcor
    let entre3 = resu / 3
    let fcos = entre3 / 7.5
    document.querySelector(
      "#resultado"
    ).textContent = `El deficit de HCO3 es: ${resu.toFixed(
      0
    )} mEq/L, el cual dividimos entre 3 
        para administrarlo cada 8 hrs serian: ${entre3.toFixed(
          1
        )}. Si dividimos entre las cantidad de mEq/L por frasco
        serian ${fcos.toFixed(
          0
        )} frascos, si es mayor de 10, se puede dividir la dosis en dos partes y aplicar la mitad 
        directa y la otra mitad diluirla en 250 ml de Sol. Fisiologica.`
    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">Peso</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="nombre"
            type="number"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Bicarbonato
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            name="edad"
            type="number"
            value={this.state.edad}
            onChange={this.handleChange}
          />
        </InputGroup>

        <ButtonDiv>
          <Button variant="primary" type="submit" value="Submit">
            Submit
          </Button>
          <Resultado>
            <div id="resultado"></div>
          </Resultado>
        </ButtonDiv>
      </Form>
    )
  }
}

export default BicarbonatoForm

const Resultado = styled.div`
  #resultado {
    text-align: center;
    max-width: 450px;
    color: white;
    font-size: 15px;
  }
`
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
