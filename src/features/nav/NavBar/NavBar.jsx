import React, { Component, Fragment } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Link, withRouter} from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import {openModal} from '../../modal/modalActions';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';

const actions={
  openModal,
}
const mapState=(state)=>(
  {
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
)
class NavBar extends Component {
    state={
      authenticated:false
    }
    handleSignOut=()=>{
      this.props.firebase.logout()
      this.props.history.push('/')
    }
    handleSignIn=()=>{
      this.props.openModal('LoginModal')
    }
    handleRegister=()=>{
      this.props.openModal('RegisterModal')
    }
    render() {
        const {auth,profile}=this.props
        const authenticated=auth.isLoaded && !auth.isEmpty
        return (
                  <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item exact as={NavLink} to="/" header>
                        <img src="/assets/logo.png" alt="logo" />
                        Re-vents
                      </Menu.Item>
                      <Menu.Item exact as={NavLink} to="/events" name="Events" />
                      {authenticated && 
                      <Fragment>
                        <Menu.Item as={NavLink} to="/people" name="People" />
                        <Menu.Item as={NavLink} to="/test" name="Test" />
                        <Menu.Item>
                          <Button as={Link} to="/createEvent" floated="right" positive inverted content="Create Event" />
                        </Menu.Item>
                      </Fragment>}
                      {authenticated ?<SignedInMenu profile={profile} signOut={this.handleSignOut}/>:<SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister}/>}
                    </Container>
                  </Menu>
        )
    }
}


export default withRouter(withFirebase(connect(mapState,actions)(NavBar)));