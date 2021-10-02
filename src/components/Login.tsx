import React from 'react'
import { motion } from 'framer-motion'
import { googleAuthProvider, firebase } from '../firebase.config'

import { useDispatch } from 'react-redux'
import { goToRegister } from '../redux/ducks/uiDuck'
import { GoogleButton } from './GoogleButton'
import { useState } from 'react'
import { startLogin } from '../redux/ducks/authDuck'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(startLogin(email, password))
    }

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}  className="bg-gray-900 w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-gray-100 text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block font-bold text-gray-700">Email</label>
                            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="transition-all placeholder-gray-500 text-gray-100 bg-gray-800 w-full px-4 py-3 rounded-lg mt-2 focus:shadow-xl outline-none focus:placeholder-gray-500" required />
                        </div>
                        <div className="mt-4">
                            <label className="block font-bold text-gray-700">Password</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" minLength={6} className="text-gray-100 placeholder-gray-500 transition-all w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 focus:placeholder-gray-500 focus:bg-gray-800 focus:shadow-xl outline-none" required />
                        </div>
                        <div className="text-right mt-2">
                            <button className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</button>
                        </div>
                        <button type="submit" className="transition-all w-full hover:shadow-lg block bg-blue-600 hover:bg-blue-700 focus:bg-blue-500 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
                    </form>
                    <hr className="my-6 border-gray-800 w-full" />
                    <GoogleButton onClick={ () => {
                        firebase.auth().signInWithRedirect( googleAuthProvider )
                    }}/>
                    <p className="mt-8 text-gray-400">Need an account? <button onClick={ () => dispatch(goToRegister()) } className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                        account</button></p>
                </div>
            </motion.div>
    )
}
