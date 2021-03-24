import React from 'react'

// createContext = > return Provider and consumer
export const AuthContext = React.createContext()

// either use this or useContext hook
export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends React.Component{
    
    // const [user, setUser] = useState( user:{name:'Tony', age:21})
    state = { user: {name:'Tony', age:21}, x:'yo'}
  
    render(){
        return(
        // <AuthContext.Provider value={this.state}>
        <AuthContext.Provider value={{...this.state, someFunc: ()=> alert('yo')}}>
          {this.props.children}
        </AuthContext.Provider>
        )
    }
}

export default AuthProvider