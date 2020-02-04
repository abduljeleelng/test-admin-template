import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft,faBell,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink,Badge,Form,Row,Col,FormGroup,Input } from 'reactstrap';
import { Link } from 'react-router-dom';


export default props => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  
  return (
    <Navbar color="info" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft}/>
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
          <Form>
      <Row form>
        <Col md={8}>
          <FormGroup>
            <Input type="email" name="email" id="exampleEmail" placeholder=" Search... " />
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Button color="info"> <FontAwesomeIcon icon={faSearch}/></Button>
          </FormGroup>
          </Col>
        </Row>
        </Form>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/'}>Support</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/'}>Faq </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/'}><FontAwesomeIcon icon={faBell}/> <Badge color="secondary">8</Badge></NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/"> Oluwaleke Ojo <img src={require("../../asset/img/abduljeleelNG.jpg")} alt="..." style={{width:'20px',height:'20px'}} /> </NavLink>
          </NavItem>
      </Nav>
      </Collapse>
    </Navbar>
  );
}
