import { Action } from "redux"


// constantes
const dataInitial = {
    page: 'login',
    modalOpen: false
}

// types
export const GO_TO_LOGIN = '[ui] login'
export const GO_TO_REGISTER = '[ui] register'

export const OPEN_MODAL = '[ui] open modal'
export const CLOSE_MODAL = '[ui] close modal'

// reducer
export default function uiReducer(state = dataInitial, action: Action) {
    switch (action.type) {
        case GO_TO_LOGIN:
            return { ...state, page: 'login' }
        case GO_TO_REGISTER:
            return { ...state, page: 'register' }
        case OPEN_MODAL:
            return { ...state, modalOpen: true }
        case CLOSE_MODAL:
            return { ...state, modalOpen: false }
        default:
            return state
    }
}

// actions
export const goToLogin = () => ({
    type: GO_TO_LOGIN,
})

export const goToRegister = () => ({
    type: GO_TO_REGISTER,
})

export const openModal = () => ({
    type: OPEN_MODAL
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})