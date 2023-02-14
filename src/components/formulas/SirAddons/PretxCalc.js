import React from "react"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"
import Table from "react-bootstrap/Table"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import InputGroup from "react-bootstrap/InputGroup"

class PretxCalc extends React.Component {
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
    $("#resultado").show()
    $("#inputDisplay").hide()
    const pes = this.state.peso
    let ket = (pes * 1) / 50
    let fen = (pes * 5) / 50
    let mida = (pes * 0.1) / 5
    let eto = (pes * 0.3) / 2
    let tio = (pes * 3) / 25
    let mket = pes * 1
    let mfen = pes * 5
    let mmida = pes * 0.1
    let meto = pes * 0.3
    let mtio = pes * 3
    document.querySelector("#ketamina").textContent = `${ket.toFixed(1)} ml`
    document.querySelector("#fentanilo").textContent = `${fen.toFixed(1)} ml`
    document.querySelector("#mida").textContent = `${mida.toFixed(1)} ml`
    document.querySelector("#eto").textContent = `${eto.toFixed(1)} ml`
    document.querySelector("#tio").textContent = `${tio.toFixed(1)} ml`
    document.querySelector("#mketamina").textContent = `${mket.toFixed(0)} mg`
    document.querySelector("#mfentanilo").textContent = `${mfen.toFixed(0)} mcg`
    document.querySelector("#mmida").textContent = `${mmida.toFixed(0)} mg`
    document.querySelector("#meto").textContent = `${meto.toFixed(0)} mg`
    document.querySelector("#mtio").textContent = `${mtio.toFixed(0)} mg`
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
          <Table class="table">
            <thead>
              <tr>
                <th scope="col">Medicamento</th>
                <th scope="col">Dosis</th>
                <th scope="col">mgs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ketamina</td>
                <td>
                  <p id="ketamina"></p>
                </td>
                <td>
                  <p id="mketamina"></p>
                </td>
              </tr>
              <tr>
                <td>Fentanilo</td>
                <td>
                  <p id="fentanilo"></p>
                </td>
                <td>
                  <p id="mfentanilo"></p>
                </td>
              </tr>
              <tr>
                <td>Midazolam</td>
                <td>
                  <p id="mida"></p>
                </td>
                <td>
                  <p id="mmida"></p>
                </td>
              </tr>
              <tr>
                <td>Etomidato</td>
                <td>
                  <p id="eto"></p>
                </td>
                <td>
                  <p id="meto"></p>
                </td>
              </tr>
              <tr>
                <td>Tiopental</td>
                <td>
                  <p id="tio"></p>
                </td>
                <td>
                  <p id="mtio"></p>
                </td>
              </tr>
            </tbody>
          </Table>
        </Resultado>
      </Form>
    )
  }
}

export default PretxCalc
const Resultado = styled.div`
  display: none;
`
