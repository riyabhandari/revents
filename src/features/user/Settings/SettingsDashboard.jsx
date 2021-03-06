import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import { Route, Redirect, Switch } from 'react-router-dom'
import BasicPage from './BasicPage'
import AccountPage from './AccountPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'
import {updatePassword} from'../../auth/authActions'
import { connect } from 'react-redux'

const actions={
    updatePassword
}

const mapState=(state)=>({
    providerId:state.firebase.auth.providerData[0].providerId
})

const SettingsDashboard = ({updatePassword,providerId}) => {
    return (
        <Grid>
            <Grid.Column width={12}>
                <Switch>
                    <Redirect exact from='/settings' to='/settings/basic'></Redirect>
                    <Route path="/settings/basic" component={BasicPage}></Route>
                    <Route path="/settings/account" render={()=>
                    <AccountPage updatePassword={updatePassword} providerId={providerId}/>}/>
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

export default connect(mapState,actions)(SettingsDashboard)