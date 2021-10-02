import { Action } from "../interfaces"
import { firebase } from  '../../firebase.config'
import { closeModal, openModal } from "./uiDuck"
import Swal from "sweetalert2"

// Constants
const LOGIN = ' [auth] login'

const LOGOUT = '[auth] logout'

export default function authReducer(state = {loged: false}, action: Action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, loged: true, uid: action.payload.uid, displayName: action.payload.displayName, email: action.payload.email }
        case LOGOUT:
            return { loged: false }
        default:
            return state
    }
}

export const login = (uid:string, displayName:string, email:string, photoURL: string) => ({
    type: LOGIN,
    payload: {
        uid, displayName, email, photoURL
    }
})

export const startLogin = (email:string, password:string) => {
    return async (dispatch:any) => {
        try {
            dispatch(openModal())
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
            dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
            dispatch(closeModal())
        } catch (error) {
            dispatch(closeModal())
            Swal.fire('Error', error.message, 'error')
            console.log(error);
        }
    }
}

export const startRegister = (email:string, displayName:string, password:string, photoURL:string = 'https://elecciones.pucp.edu.pe/wp-content/uploads/2020/10/placeholder-user.jpg') => {
    return async (dispatch:any) => {

        try {
            dispatch( openModal() )
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password)
            await user.updateProfile({ displayName, photoURL })
            
            dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
            dispatch(closeModal())

        } catch (error) {
            Swal.fire('Error', error.message, 'error')
            dispatch(closeModal())
            console.log(error);
        }
    }
}

export const logout = () => ({
    type: LOGOUT
})

export const startLogout = () => {
    return async (dispatch:any) => {
        Swal.fire({
            title: 'Are you sure you want log out?',
            showDenyButton: true,
            showCancelButton: true,
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(openModal())
                setTimeout(async() => {
                    await firebase.auth().signOut();
                    dispatch(logout());
                    dispatch(closeModal())
                }, 1000);
            }
        })

    }
}