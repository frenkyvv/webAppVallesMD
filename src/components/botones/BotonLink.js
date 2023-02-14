import React from "react"
import styled from "styled-components"

function Boton(props) {
  return (
    <Box>
      <Text>{props.text || "Boton"}</Text>
    </Box>
  )
}

export default Boton

const Box = styled.div`
  width: 130px;
  height: 45px;
  background-color: #697ea0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(13, 25, 34, 0.25);
`
const Text = styled.p`
  font-size: 17px;
  line-height: 130%;
  text-align: center;
  color: #161F26;
  padding-top: 15px;
  text-decoration: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
