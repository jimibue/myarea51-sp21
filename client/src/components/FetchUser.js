// This sees if we have User and if token is validate.

import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'

const FetchUser = (props) => {
    const [loaded, setLoaded] = useState(false)
    const { user,setUser } = useContext(AuthContext)
    useEffect(()=>{
        checkUserAuthenticated()
    })

    const checkUserAuthenticated = async () => {
        // do I have User or is there not a token in local
        if( user || !localStorage.getItem('access-token')){
           setLoaded(true)
           return
        }
        // we don't have a user in state but we do have a token, ie refresh
        // we need validate token is it a valid token in local storage
        try {
            const res = await axios.get('/api/auth/validate_token')
            // res.data.data will be the user
            setUser(res.data.data)
        } catch (err){
            console.log('invalid token')
        } finally {
            setLoaded(true)
        }

    }

    return loaded ? props.children : null
}

export default FetchUser
