import React, {Component,Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/Home/HomePage';
import PeopleDashboard from '../../features/user/PeopeDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testarea/TestComponent';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import ModalManager from '../../features/modal/ModalManager';

class App extends Component {
  render(){
    return (
      <Fragment>
        <ModalManager/>
        <Route exact path="/" component={HomePage}></Route>
        <Route path='/(.+)' render={()=>(
        <Fragment>
        <NavBar/>
        <Container className="main">
            <Switch key={this.props.location.key}>
              <Route exact path="/events" component={EventDashboard}></Route>
              <Route path="/events/:id" component={EventDetailedPage}></Route>
              <Route path="/people" component={PeopleDashboard}></Route>
              <Route path="/profile/:id" component={UserDetailedPage}></Route>
              <Route path="/settings" component={SettingsDashboard}></Route>
              <Route path={["/createEvent","/manage/:id"]} component={EventForm}></Route>
              <Route path="/test" component={TestComponent}></Route>
            </Switch>
        </Container>
      </Fragment>
        )}></Route>
      </Fragment>
      
    );
  }
}

export default withRouter(App);
