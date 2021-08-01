import React from "react"
import { Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faFont,
  faPhotoVideo,
  faUsers,
  faCogs
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "wouter"

function Menu() {
  return (
    <Nav defaultActiveKey="/" className="flex-column">
      <Nav.Link as={Link} href="/">
        <FontAwesomeIcon icon={faHome} /> Dashboard
      </Nav.Link>
      <Nav.Link as={Link} href="/texts">
        <FontAwesomeIcon icon={faFont} /> Texts
      </Nav.Link>
      <Nav.Link as={Link} href="/assets">
        <FontAwesomeIcon icon={faPhotoVideo} /> Assets
      </Nav.Link>
      <Nav.Link as={Link} href="/users">
        {" "}
        <FontAwesomeIcon icon={faUsers} /> Users
      </Nav.Link>
      <Nav.Link as={Link} href="/settings">
        <FontAwesomeIcon icon={faCogs} /> Settings
      </Nav.Link>
    </Nav>
  )
}

export default Menu
