import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
 
} from "react-router-dom";
import { startChecking } from '../actions/authAction';
import { ScreenLogin } from '../components/authentication/ScreenLogin';
import { ScreenSchedule } from '../components/schedule/ScreenSchedule';



export const RouterApp = () => {

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(startChecking());
    }, [dispatch])

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
