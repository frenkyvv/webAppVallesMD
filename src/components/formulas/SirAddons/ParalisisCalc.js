import React from "react"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"
import Table from "react-bootstrap/Table"
import "bootstrap/dist/css/bootstrap.min.css"
import InputGroup from "react-bootstrap/InputGroup"

class ParaCalc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      peso: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const peso = target.name

    this.setState({
      [peso]: value,
    })
  }

  handleSubmit(e) {
    const pes2 = this.state.peso
    let succi = (pes2 * 1.5) / 20
    let rocu = (pes2 * 1) / 10
    let succimg = pes2 * 1.5
    let rocumg = pes2 * 1
    document.querySelector("#succir").textContent = `${succi.toFixed(1)} ml`
    document.querySelector("#rocur").textContent = `${rocu.toFixed(1)} ml`
    document.querySelector("#succirmg").textContent = `${succimg.toFixed(0)} mg`
    document.querySelector("#rocurmg").textContent = `${rocumg.toFixed(0)} mg`
    e.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div id="inputDisplay">
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              Peso
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              name="peso"
              type="number"
              value={this.state.peso}
              onChange={this.handleChange}
            />
          </InputGroup>

          <Button variant="primary" type="submit" value="Submit">
            Calcular
          </Button>
        </div>
        <br />
        <Resultado id="resultado">
          <div id="resul">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th scope="col">Medicamento</th>
                  <th scope="col">ml</th>
                  <th scope="col">mg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Succinilcolina</td>
                  <td>
                    <p id="succir"></p>
                  </td>
                  <td>
                    <p id="succirmg"></p>
                  </td>
                </tr>
                <tr>
                  <td>Rocuronio</td>
                  <td>
                    <p id="rocur"></p>
                  </td>
                  <td>
                    <p id="rocurmg"></p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Resultado>
      </Form>
    )
  }
}

export default ParaCalc
const Resultado = styled.div``
