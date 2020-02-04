import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faReceipt, faCopy,faAlignLeft, faUser,faListAlt } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})} style={{backgroundColor:"#FFFFFF", color:"#C5CCD2"}}>
      <div className="sidebar-header" style={{backgroundColor:"#FFFFFF"}}>
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3 style={{color:"#1875F0"}}>TransMonitor</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <p style={{backgroundColor:"#27AE60", borderRadius:10, boarderSize:2, margin:'30px'}}> Generate Invoice </p>
          <p style={{color:"#C5CCD2", paddingLeft:"30px"}}>Main</p>
          <NavItem>
            <NavLink tag={Link} to={'/about'}>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2"/> Overviw
            </NavLink>
          </NavItem>
          <SubMenu title="payment" icon={faHome} items={submenus[0]}/>
          <SubMenu title="Orders" icon={faCopy} items={submenus[1]}/>
          <NavItem>
            <NavLink tag={Link} to={'/'}>
              <FontAwesomeIcon icon={faUser} className="mr-2"/> Merchant Profile
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  const submenus = [
    [
      {
        title: "All Payment",
        target: "/",
        icon:faBriefcase
      },
      {
        title: "Reconciled Payment",
        target: "/", 
        icon:faAlignLeft     
      },
      {
        title: "UnReconciled Payment",
        target: "/",   
        icon:faReceipt  
      },
      {
        title: "Manual Settlement",
        target: "/", 
        icon:faReceipt   
      }
    ],
    [
      {
        title: "all orders",
        target: "/",  
        icon:faListAlt       
      },
      {
        title: "Pending Orders",
        target: "/",  
        icon:faListAlt    
      },
      {
        title: "Reconciled Orders",
        target: "/",
        icon:faListAlt       
      }
    ]
  ]
  

export default SideBar;
