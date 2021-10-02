import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { fileUpload } from '../helpers'
import { startRegister } from '../redux/ducks/authDuck'
import { goToLogin, openModal } from '../redux/ducks/uiDuck'

export const Register = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(password.length < 6) Swal.fire({
            icon: 'error',
            title: 'Contraseña...',
            text: 'La contraseña debe tener minimo 6 caracteres!',
        })

        Swal.fire({
            title: 'Do you want a profile photo?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const { value: file } = await Swal.fire({
                    title: 'Select image',
                    input: 'file',
                    inputAttributes: {
                        'accept': 'image/*',
                        'aria-label': 'Upload your profile picture',
                        //'style': 'display: none'
                    }
                  })
                  
                  if (file) {
                    const reader = new FileReader()
                    reader.onload = (e:any) => {
                      Swal.fire({
                        // imageUrl: e.target.result,
                        html: `<img class="object-cover h-56 w-56 rounded-full m-auto" src="${e.target.result}" alt="img">`,
                        //imageAlt: 'The uploaded picture',
                        showDenyButton: true
                      }).then( async res => {
                          if(res.isConfirmed){
                            dispatch(openModal())
                            const photoURL = await fileUpload(file)
                            dispatch(startRegister(email, name, password, photoURL))
                            console.log(file)
                          } else if (res.isDenied){
                            const { value: file } = await Swal.fire({
                                title: 'Select image',
                                input: 'file',
                                inputAttributes: {
                                    'accept': 'image/*',
                                    'aria-label': 'Upload your profile picture',
                                    //'style': 'display: none'
                                }
                              })
                              
                              if (file) {
                                const reader = new FileReader()
                                reader.onload = (e:any) => {
                                  Swal.fire({
                                    html: `<img class="object-cover h-56 w-56 rounded-full m-auto" src="${e.target.result}" alt="img">`,
                                    showDenyButton: true
                                  }).then( async res => {
                                      if(res.isConfirmed){
                                        dispatch(openModal())
                                        const photoURL = await fileUpload(file)
                                        dispatch(startRegister(email, name, password, photoURL))
                                        console.log(file)   
                                      }
                                  })
                                }
                                reader.readAsDataURL(file)
                              }
                          }
                      })
                    }
                    reader.readAsDataURL(file)
                  }
            } else if (result.isDenied) {
              dispatch(startRegister(email,name,password))
            }
        })


    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            className="bg-gray-900 w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
            <div className="w-full h-100">
                <h1 className="text-gray-100 text-xl md:text-2xl font-bold leading-tight mt-12">Create your account</h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block font-bold text-gray-700">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="transition-all placeholder-gray-500 text-gray-100 bg-gray-800 w-full px-4 py-3 rounded-lg mt-2 focus:shadow-xl outline-none focus:placeholder-gray-500" required />
                    </div>
                    <div className="mt-4">
                        <label className="block font-bold text-gray-700">Name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" minLength={3} className="text-gray-100 placeholder-gray-500 transition-all w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 focus:placeholder-gray-500 focus:bg-gray-800 focus:shadow-xl outline-none" required />
                    </div>
                    <div className="mt-4">
                        <label className="block font-bold text-gray-700">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" minLength={6} className="text-gray-100 placeholder-gray-500 transition-all w-full px-4 py-3 rounded-lg bg-gray-800 mt-2 focus:placeholder-gray-500 focus:bg-gray-800 focus:shadow-xl outline-none" required />
                    </div>
                    <button type="submit" className="transition-all w-full hover:shadow-lg block bg-blue-600 hover:bg-blue-700 focus:bg-blue-500 text-white font-semibold rounded-lg px-4 py-3 mt-6">Create account</button>
                </form>
                <p className="mt-8 text-gray-400">Alredy have an account? <button onClick={()=> dispatch(goToLogin())} className="text-blue-500 hover:text-blue-700 font-semibold">Login</button></p>
            </div>
        </motion.div>
    )

}
