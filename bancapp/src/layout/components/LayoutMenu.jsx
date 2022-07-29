import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Menu from '../../pages/admin/menu/Menu';
import "../../assets/tailwind.css";


const LayoutMenu = ({children}) => {
  return (
    <Container className='container flex'>
    <Menu>
    </Menu>
      <Outlet />
    </Container>
    )
}

export default LayoutMenu;