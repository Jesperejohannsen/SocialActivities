import { Button, Container, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {

  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as={NavLink} to="/" header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: '20px'}}/>
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name='Activities' />
        <Menu.Item as={NavLink} to="/errors" name='Errors' />
        <Menu.Item>
          <Button as={NavLink} to="/createActivity" positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar