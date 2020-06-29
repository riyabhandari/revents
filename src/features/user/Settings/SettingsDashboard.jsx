import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import { Route, Redirect, Switch } from 'react-router-dom'
import BasicPage from './BasicPage'
import AccountPage from './AccountPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'

const SettingsDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic'></Redirect>
                    <Route path="/settings/basic" component={BasicPage}></Route>
                    <Route path="/settings/account" component={AccountPage}></Route>
                    <Route path="/settings/about" component={AboutPage}></Route>
                    <Route path="/settings/photos" component={PhotosPage}></Route>
                </Switch>
            </Grid.Column>
            <Grid.Column width={4}>
                <SettingsNav/>
            </Grid.Column>
        </Grid>
    )
}

export default SettingsDashboard 