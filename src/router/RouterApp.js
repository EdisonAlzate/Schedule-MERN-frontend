import React from 'react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 
} from "react-router-dom";
import { ScreenLogin } from '../components/authentication/ScreenLogin';
import { ScreenSchedule } from '../components/schedule/ScreenSchedule';



export const RouterApp = () => {
    return (
    <Router>
         <div>
             
            <Switch>
                <Route exact path="/login" component={ScreenLogin}/>
                <Route exact path="/" component={ScreenSchedule}/>

                <Redirect to ="/"/>
            </Switch>

         </div>
    </Router>
    )
}
