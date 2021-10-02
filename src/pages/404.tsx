import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

export const NotFound = () => {

    const { loged } = useSelector((state:any) => state.auth)

    return (
        <Redirect to={ loged ? '/' : '/auth' } />
    )
}
