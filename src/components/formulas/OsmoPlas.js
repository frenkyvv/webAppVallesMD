import React from "react"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import InputGroup from "react-bootstrap/InputGroup"

class OsmoPlasmaticaForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sodio: "",
      potasio: "",
      glucosa: "",
      urea: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const target = e.target
    const value = target.value
    const sodio = target.name
    const potasio = target.name
    const glucosa = target.name
    const urea = target.name

    this.setState({
      [sodio]: value,
      [potasio]: value,
      [glucosa]: value,
      [urea]: value,
    })
  }
  handleSubmit(e) {
    const sod = this.state.sodio
    const pot = this.state.potasio
    const glu = this.state.glucosa
    const ure = this.state.urea
    const res = glu / 18 + ure / 6 + pot * 2 + sod * 2
    document.querySelector("#resu").textContent = `${res.toFixed(1)}`
    $("#etiquetas").hide()
    $("#botondes").hide()
    e.preventDefault()
  }

  render() {
    return (
      <Form>
        <div id="etiquetas">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Sodio
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-default"
              name="sodio"
              onChange={this.handleChange}
              value={this.state.sodio}
              type="number"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Glucosa
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-default"
              name="glucosa"
              value={this.state.glucosa}
              onChange={this.handleChange}
              type="number"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Potasio
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-default"
              name="potasio"
              type="number"
              value={this.state.potasio}
              onChange={this.handleChange}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Urea
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-default"
              name="urea"
              type="number"
              value={this.state.urea}
              onChange={this.handleChange}
            />
          </InputGroup>
        </div>
        <ButtonDiv>
          <div id="botondes">
            <Button variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </div>
          <div id="resu"></div>
        </ButtonDiv>
      </Form>
    )
  }
}

export default OsmoPlasmaticaForm

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
