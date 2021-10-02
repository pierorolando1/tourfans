import React from 'react'
import { useSelector } from 'react-redux';

import { Login } from '../components/Login'
/*import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";*/
import { Register } from '../components/Register';

const AuthPage = () => {
    const ui = useSelector((state: any) => state.ui)

    return (
            <section className="flex flex-col md:flex-row h-screen items-center bg-gray-900">
                <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen bg-center bg-cover" style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}></div>
                { ui.page === 'login' ? <Login /> : <Register /> }
            </section>
    )   
}

export default AuthPage
