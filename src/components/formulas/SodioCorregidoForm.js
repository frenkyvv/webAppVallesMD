import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import InputGroup from "react-bootstrap/InputGroup"

class SodioForm extends React.Component {
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
    const sod = this.state.nombre
    const glu = this.state.edad
    const uno = glu - 100
    const dos = 0.016 * uno
    const total = parseFloat(sod) + parseFloat(dos)
    let total1 = total.toFixed(1)
    document.querySelector("#resultado").textContent =
      `Sodio Corregido: ` + total1
    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Sodio</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            name="nombre"
            type="number"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Glucosa</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
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
          <br />
          <Resultado>
            <div id="resultado"></div>
          </Resultado>
        </ButtonDiv>
      </Form>
    )
  }
}

export default SodioForm

const Resultado = styled.div`
  #resultado {
    color: black;
  }
`
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
