import React, {useContext, useState} from 'react'
import { Form, Header } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'

const Register = (props)=> {
    const {handleRegister} = useContext(AuthContext)
    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('123456')
    const [passwordConfirmation, setPasswordConfirmation] = useState('123456')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email, password, passwordConfirmation})
        handleRegister({email, password, passwordConfirmation})
    } 
    return (

        <>
        <Header>Register</Header>
        <Form onSubmit={handleSubmit}>
          <Form.Input 
            autoFocus
            required
            label='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
         <Form.Input 
            required
            label='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        <Form.Input 
            required
            label='confirm password'
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
          />
          <Form.Button>register</Form.Button>
        </Form>
        </>
    )
}

export default Register