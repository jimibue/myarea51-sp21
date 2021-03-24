import axios from 'axios'
import React from 'react'

// createContext = > return Provider and consumer
export const AuthContext = React.createContext()

// either use this or useContext hook
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component{
    
    state = { user: null}

    // .then.catch syntax
    handleRegister = (user, history) =>{
       axios.post('/api/auth', user).then(res =>{
          console.log(res)
          this.setState({user: res.data.data})
       }).catch(err=>{
          // do something with err
          console.log(err)
          console.log(err.response.data)
          alert('error in register')
       })


    }

    // handleLogin=
    // handleLogout =?
  
    render(){
        return(
        // <AuthContext.Provider value={this.state}>
        <AuthContext.Provider value={{...this.state, handleRegister: this.handleRegister}}>
          {this.props.children}
        </AuthContext.Provider>
        )
    }
}

export default AuthProvider