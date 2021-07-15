import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import {
  BrowserRouter as Router,
  Switch,
  Redirect
 
} from "react-router-dom";
import { startChecking } from '../actions/authAction';
import { ScreenLogin } from '../components/authentication/ScreenLogin';
import { ScreenSchedule } from '../components/schedule/ScreenSchedule';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const RouterApp = () => {

    const dispatch = useDispatch()
    const {checking,uid} = useSelector(state => state.auth)

    useEffect(() => {
      dispatch(startChecking());
    }, [dispatch])

    console.log(checking)
    if(checking){
      return <h5>Wait...</h5>;
    }

    return (
    <Router>
         <div>
             
            <Switch>
                <PublicRoute
                 exact
                 path="/login" 
                 component={ScreenLogin}
                 isAuthenticated={!!uid}
                 />

                <PrivateRoute
                 exact 
                 path="/" 
                 component={ScreenSchedule}
                 isAuthenticated={!!uid}
                 
                 />

                <Redirect to ="/"/>
            </Switch>

         </div>
    </Router>
    )
}
