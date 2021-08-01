import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "wouter"
import Layout from "../components/Layout"

function Texts() {
  return (
    <Layout title={"Texts"}>
      <Button href="/texts/edit" as={Link}>
        Create new Text
      </Button>
    </Layout>
  )
}

export default Texts
