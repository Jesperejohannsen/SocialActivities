import { Button, Container, Menu } from 'semantic-ui-react'

interface Props {
  openForm: () => void;
}

const NavBar = ({openForm}: Props) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: '20px'}}/>
          Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button onClick={openForm} positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar