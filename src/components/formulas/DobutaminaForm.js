import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

class DobutaminaForm extends React.Component {
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
    const dos = this.state.edad
    document.querySelector("#textoPrevio").textContent =
      "Aforar 2 amp de Dobutamina (500mg) en 100ml de solución glucosada 5% e iniciar la infusión a: "
    const res = (pes * dos) / 83.33
    const resultado = res.toFixed(2)
    document.querySelector("#resultado").textContent = `${resultado} ml/hr`
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
            Dosis
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
        <br />
        <ButtonDiv>
          <Button variant="primary" type="submit" value="Submit">
            Submit
          </Button>
          <br />
          <div id="textoPrevio"></div>
          <div id="resultado"></div>
        </ButtonDiv>
      </Form>
    )
  }
}

export default DobutaminaForm
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 35px;
  max-width: 250px;
  #textoPrevio {
    padding-top: 5px;
    text-align: center;
  }
  #resultado {
    color: blue;
  }
`
