import React from "react"
import { Container, Row, Col } from "react-bootstrap"

function Header() {
  return (
    <Container fluid className="bg-dark p-2">
      <Row>
        <Col className="text-center text-light">
          <b>Really Simple CMS</b>{" "}
          <span className="text-muted">| No more no less</span>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
