import React from 'react'
import { RouterApp } from './router/RouterApp'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 
} from "react-router-dom";
import { ScreenLogin } from './components/authentication/ScreenLogin';

export const ScheduleApp = () => {
    return (
    <Router>
         <div>
             
            <Switch>
                <Route exact path="/login" component={ScreenLogin}/>
                <Route exact path="/" component={ScheduleApp}/>

                <Redirect to ="/"/>
            </Switch>

         </div>
    </Router>
    )
}
