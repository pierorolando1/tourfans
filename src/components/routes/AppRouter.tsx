import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch
    /*
    Switch,
    Link*/
  } from "react-router-dom";
import AuthPage from '../../pages/AuthPage';
import HomePage from '../../pages/HomePage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { firebase } from '../../firebase.config'
import { login, logout } from '../../redux/ducks/authDuck';
import { useState } from 'react';
import { closeModal, openModal } from '../../redux/ducks/uiDuck';
import { NotFound } from '../../pages/404';

export const AppRouter = () => {
    const { loged } = useSelector((state:any) => state.auth)
    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        
        dispatch(openModal())

        firebase.auth().onAuthStateChanged(async (user) => {

            console.log(user)

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL));
            } else {
                dispatch(logout())
            }

            setChecking(false)  
            dispatch(closeModal())
        });
    }, [dispatch])

    return (
        checking ? <div className="bg-gray-900 w-full h-screen"></div> :
        <Router>
            <Switch>
                <PrivateRoute exact path="/" isAuthenticated={loged} component={ HomePage } />
                <PublicRoute exact path="/auth" isAuthenticated={loged} component={ AuthPage } />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}
