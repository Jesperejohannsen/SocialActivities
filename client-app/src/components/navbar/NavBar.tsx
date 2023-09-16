import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import "./navbar.css"

const NavBar = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img src="/public/logo.png" alt="logo" style={{marginRight: '10px'}}/>
          Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar