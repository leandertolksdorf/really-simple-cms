import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import Menu from "./Menu"

function Layout({ title, children }) {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={3} className="bg-light p-3">
            <Menu />
          </Col>
          <Col xs={9} className="p-3">
            <h2>{title}</h2>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Layout
