import React from "react"
import styled from "styled-components"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import InputGroup from "react-bootstrap/InputGroup"

class DeficitMujer extends React.Component {
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
    const peso = this.state.nombre
    const edad = this.state.edad
    const prim = peso * 0.6
    const sec = edad / 140
    const ter = sec - 1
    const resul = prim * ter
    const resultado = resul.toFixed(1)
    document.querySelector(
      "#resultado"
    ).textContent = `Se requieren ${resultado} Litros, para llevar el Sodio a 140 mEq/dl`
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
            Na Serico
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
          <div id="resultado"></div>
        </ButtonDiv>
      </Form>
    )
  }
}

export default DeficitMujer

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`