import React from "react"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"
import Accordion from "react-bootstrap/Accordion"
import Table from "react-bootstrap/Table"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import PretxCalc from "./SirAddons/PretxCalc"
import ParaCalc from "./SirAddons/ParalisisCalc"

class SirForm extends React.Component {
  clickHide(e) {
    $("#texto1").hide()
    $("#BackBut").show()
    e.preventDefault()
  }
  clickBack(e) {
    $("#texto1").show()
    $("#BackBut").hide()
    e.preventDefault()
  }

  render() {
    return (
      <Wrapper>
        <Accordion defaultActiveKey="8">
          <Accordion.Item eventKey="0">
            <Accordion.Header eventKey="0">Preparación</Accordion.Header>
            <Accordion.Body>
              <Form>
                {["checkbox"].map(type => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Laringoscopio, Hojas y Fuentes`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Tubo endotraqueal 1 medida arriba y 1 abajo y otro adicional, Checar balon sellador.`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Guia maleable para tubo endotraqueal y lubricante`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Máscara con bolsa y valvula de no reihnalacion`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Canulas orofaringeas de distintos tamaños`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Equipo de succión con todas sus manguerasTubo endotraqueal 1 medida arriba y 1 abajo y otro adicional, Checar balon sellador.Equipo de succión con todas sus mangueras`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Jeringa desechable de 10ml`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Fuente de Oxigeno`}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Equipo alternativo en caso de intubación dificil, mascara laringea, video laringoscopio o equipo de cricotiroidectomia`}
                    />
                  </div>
                ))}
              </Form>
              <br />
              <br />
              <Medicamento>Medicamentos</Medicamento>
              <ThinLine></ThinLine>
              <br />
              <br />
              <Table striped>
                <thead>
                  <tr>
                    <th scope="col">Uso</th>
                    <th scope="col">Medicamento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Premedicación</th>
                    <td>Lidocaina Fentanilo Atropina</td>
                  </tr>
                  <tr>
                    <th scope="row">Inducción</th>
                    <td>Midazolam Fentanilo Tiopental Etomidato Ketamina</td>
                  </tr>
                  <tr>
                    <th scope="row">Relajación</th>
                    <td>Succinilcolina Rocuronio</td>
                  </tr>
                  <tr>
                    <th scope="row">Antiarritmicos</th>
                    <td>Amiodarona Adenosina Sulfato de Magnesio</td>
                  </tr>
                  <tr>
                    <th scope="row">Vasopresores</th>
                    <td>Adrenalina Norepinefrina Vasopresina</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Preoxigenación</Accordion.Header>
            <Accordion.Body>
              Es el procedimiento mediante el cual se aumenta de manera rápida
              la presión parcial arterial de oxígeno (PaO2) como medida de
              seguridad durante el periodo apnéico del proceso de intubación
              orotraqueal, posterior a la administración de la sedación y
              relajación muscular. Su propósito es reemplazar el nitrógeno que
              se encuentra en la vía aérea (capacidad funcional residual) por
              altas concentraciones de oxígeno para permitir el aumento del
              tiempo de paro respiratorio hasta en cinco minutos en pacientes
              normoxémicos, sin que presenten índices críticos de hipoxemia
              definida como una saturación menor al 90 %, medida con la
              oximetría de pulso.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Pretratamiento</Accordion.Header>
            <Accordion.Body>
              <br />
              <Texto1 id="texto1">
                <BotonCalcular1>
                  <Button
                    variant="primary"
                    id="botOcultar"
                    onClick={this.clickHide}
                  >
                    Calcular
                  </Button>
                </BotonCalcular1>
                <br />
                <br />
                Se han reportado efectos hemodinámicos potencialmente nocivos
                durante la laringoscopia directa, la inserción del tubo
                orotraqueal o la administración de los medicamentos necesarios
                para realizar estos procedimientos. Dentro de estos efectos se
                presentan principalmente bradicardia, taquicardia, hipertensión
                arterial, aumento de la presión intracraneana (PIC) con eventual
                disminución de la presión de perfusión cerebral, hipercalemia y
                broncoespasmo. La premedicación intenta atenuar o evitar los
                efectos hemodinámicos, respiratorios o metabólicos causen riesgo
                a la vida o empeoren las condiciones de salud de los individuos
                que van a ser llevados a una SIR.
                <br />
                <DatosPreTx>
                  Se han reportado efectos hemodinámicos potencialmente nocivos
                  durante la laringoscopia directa, la inserción del tubo
                  orotraqueal o la administración de los medicamentos necesarios
                  para realizar estos procedimientos. Dentro de estos efectos se
                  presentan principalmente bradicardia, taquicardia,
                  hipertensión arterial, aumento de la presión intracraneana
                  (PIC) con eventual disminución de la presión de perfusión
                  cerebral, hipercalemia y broncoespasmo. La premedicación
                  intenta atenuar o evitar los efectos hemodinámicos,
                  respiratorios o metabólicos causen riesgo a la vida o empeoren
                  las condiciones de salud de los individuos que van a ser
                  llevados a una SIR
                  <br />
                  <div id="datos">
                    <strong>Datos importantes:</strong> <br />
                    1) Inducen depresión respiratoria, por lo que la
                    preoxigenación es indispensable, teniendo en cuenta que el
                    remifentanilo induce apnea con más frecuencia que el
                    fentanilo. <br />
                    2) Son medicamentos que pueden producir hipotensión y no
                    deben emplearse en condiciones de choque no resuelto.
                    <br />
                    3) Disminuyen los requerimientos de los medicamentos
                    inductores para lograr unas buenas condiciones para
                    intubación traqueal.
                    <br />
                  </div>
                </DatosPreTx>
                <Induccion>
                  <div id="induccion">
                    <strong>Inducción:</strong>
                    <p>
                      El término inducción hace referencia a la acción de{" "}
                      <u>inducir sedación y pérdida de conciencia</u> en el
                      paciente para poder llevar a cabo la intubación traqueal,
                      se debe de recordar que <u>sedación</u> o{" "}
                      <u>somnolencia</u> no es sinónimo de analgesia, y en
                      determinadas circunstancias clínicas que precisan una SIR,
                      es necesario que el control del dolor sea parte integral
                      del propósito que debe alcanzar el equipo de salud en la
                      atención del paciente en el servicio de urgencias.
                    </p>
                    <p>
                      Los medicamentos estan dividos en:{" "}
                      <strong>barbitúricos:</strong> (pentobarbital o
                      tiopental), <strong>opioides de acción corta:</strong>{" "}
                      (fentanilo), <strong>sedantes no barbitúricos: </strong>{" "}
                      (propofol, etomidato y benzodiacepinas) y{" "}
                      <strong>anestésicos disociativos: </strong> Ketamina
                    </p>
                    <p>
                      <strong>Ketamina: </strong> De elección en pacientes con
                      asma severa que requieran SIR por su efecto
                      betaestimulante indirecto. <u>Dosis:</u> 0.5 a 2 mg/kg |
                      50 mg por cada 1 ml presentación de 10 ml | 100 kg = 100
                      mg = 2 ml
                    </p>
                    <p>
                      <strong>Fentanilo: </strong> Efecto analgesico importante
                      y sedación profunda. <u>Dosis:</u> 5 mcg/kg | 1 amp = 10
                      ml = 0.5 mg | 100 kg = 10 ml
                    </p>
                    <p>
                      <strong>Midazolam: </strong> Benzodiacepina de inicio
                      rapido y acción corta, disminuir dosis en pacientes
                      renales o hepaticos, precaución induce apnea.{" "}
                      <u>Dosis:</u> 0.05 a 0.2 mg/kg | 1 amp = 3 ml = 15 mg |
                      100 kg = 10 mg = 2 ml
                    </p>
                    <p>
                      <strong>Etomidato: </strong> Ideal para pacientes con
                      choque, politrauma (incluido TCE) y enfermedades
                      coronarias. <u>Dosis:</u> 0.3 mg/kg | 20 mg = 10 ml | 100
                      kg = 30 mg = 15 ml | 6.6 ml por cada 10 kg
                    </p>
                    <p>
                      <strong>Tiopental: </strong> Mayormente utilizado en
                      pediatria y anestesia. NO en pacientes con porfiria.{" "}
                      <u> Dosis:</u> 3 a 4 mg/kg | 500 mg = 20 ml | 100 kg = 300
                      mg = 12 ml o 16 ml
                    </p>
                  </div>
                </Induccion>
              </Texto1>
              <BotonBack id="BackBut">
                <Calculadora>
                  <PretxCalc />
                </Calculadora>
                <br />

                <br />
                <Button variant="primary" id="botBack" onClick={this.clickBack}>
                  Back
                </Button>
              </BotonBack>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Protección y posicionamiento</Accordion.Header>
            <Accordion.Body>
              <div>
                <p>
                  La valoración de una intubación dificil se ha resumido en la
                  nemotecnia <strong>LEMON</strong>
                </p>
                <p>
                  <strong>LE: </strong> <u>Lesón Externa</u>:, Investigar 3-3-2,
                  3 dedos entre incisivos, 3 dedos entre hueso hiodes y el
                  menton y 2 dedos entre la escotadura tiroidea y el piso de la
                  boca
                </p>
                <p>
                  <strong>M: </strong>
                  <u>Mallampati</u>: En una situación de urgencias, no es
                  valorable por necesitar de la cooperación del paciente.{" "}
                </p>
                <p>
                  <strong>O: </strong>
                  <u>Obstrucción</u>: de cualquier origen, ya sea infeccioso o
                  traumatico
                </p>
                <p>
                  <strong>N: </strong>
                  <u>No</u>: movilización del cuello en aquellos casos en donde
                  se sospeche de una lesión o lesiva en su movimiento.
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Paralisis e inducción</Accordion.Header>
            <Accordion.Body>
              <p>
                Se dividen en dos tipos, los relajantes musculares
                despolarizantes entre los mejores son la{" "}
                <strong>Succinilcolina / Suxametonio</strong> y los relajantes
                musculares No despolarizantes en donde encontramos al{" "}
                <strong>Rocuronio</strong>
              </p>
              <p>Calcular las Dosis:</p>
              <ParaCalc>
                <ParaCalc />
              </ParaCalc>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Procedimiento de Intubación</Accordion.Header>
            <Accordion.Body>
              <IntubacionText>
                <p>
                  Visualizar la epiglotis y con la hoja del laringoscopio
                  levantarla con la finalidad de que se logren visualizar las
                  cuerdas vocales.
                </p>
                <Imagen src="../../static/images/1laringe.jpeg" />
                <p>
                  Introducir el tubo a traves de las cuerdas vocales apoyandose
                  de la curvatura del mango
                </p>
                <Imagen src="../../static/images/2tubo.jpeg" />
              </IntubacionText>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Post-Intubación</Accordion.Header>
            <Accordion.Body>
              <p>
                Los cuidados posintubación inician después del paso del tubo
                orotraqueal. Se debe insuflar el neumotaponador y proceder a
                confirmar su adecuada posición.
              </p>
              <p>
                <em>
                  La <strong>capnografia</strong>, es el metodo mas efectivo
                  para valorar la correcta colocación del tubo.
                </em>
              </p>
              <Form.Check
                type="checkbox"
                id="auscultacion"
                label="Auscultacion en 5 puntos"
              />
              <Form.Check
                type="checkbox"
                id="columnaAire"
                label="Visualización del vapor espirado en tubo orotraqueal."
              />
              <Form.Check
                type="checkbox"
                id="expansibilidad"
                label="Adecuada expansibilidad del torax."
              />
              <br />
              <p>
                En caso de complicaciones recordar la nemotecnia{" "}
                <strong>DOPE</strong> y corregir la causa:{" "}
              </p>
              <br />
              <ul class="list-group">
                <li class="list-group-item">Desplazamiento del tubo</li>
                <li class="list-group-item">Obstrucción</li>
                <li class="list-group-item">Pneumotorax</li>
                <li class="list-group-item">Equipo</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Referencias</Accordion.Header>
            <Accordion.Body>
              <ul class="list-group">
                <li class="list-group-item">
                  1. Perez Perilla, P., Moreno Carrillo, A., & Gempeler, F.
                  (2013). ARTÍCULO ORIGINAL Guía para la secuencia de inducción
                  e intubación rápida en el servicio de emergencias Title:
                  Guidelines for Induction and Intubation Sequence Fast in Emer-
                  gency Service. Pontificia Universidad Javeriana, 54 (2),
                  175–198.
                </li>
                <li class="list-group-item">
                  2. Almarales, J. R., Saavedra, M. Á., Salcedo, Ó., Romano, D.
                  W., Morales, J. F., Quijano, C. A., & Sánchez, D. F. (2016).
                  Inducción de secuencia rápida para intubación orotraqueal en
                  Urgencias. Repertorio de Medicina Y Cirugía, 25(4), 210–218.
                  https://doi.org/10.1016/j.reper.2016.11.009
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Wrapper>
    )
  }
}
export default SirForm
const Wrapper = styled.div`
  max-width: 400px;
`
const Medicamento = styled.p`
  font-size: 20px;
  text-align: center;
`
const ThinLine = styled.div`
  width: 80%;
  margin-left: 12%;
  height: 2px;
  background-color: #000000;
`
const BotonCalcular1 = styled.div`
  text-align: center;
`
const Texto1 = styled.div``
const Calculadora = styled.div``
const BotonBack = styled.div`
  display: none;
  text-align: center;
`
const DatosPreTx = styled.div``
const Induccion = styled.div``
const IntubacionText = styled.div`
  text-align: center;
`
const Imagen = styled.img`
  width: 80%;
  flex-direction: row;
`
