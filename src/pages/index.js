import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Inicio from "./page-1"

function IndexPage() {
  return (
    <Layout>
      <SEO title="VallesMD" />
      <Wrapper>
        <Inicio />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
const Wrapper = styled.div``
